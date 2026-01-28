(async () => {
  const models = window['powerbi-client'].models;

  // Call your Function to get embed configuration
  const embedCfg = await fetch("/api/get-embed-config").then(r => r.json());

  const config = {
    type: 'report',
    id: embedCfg.id,
    embedUrl: embedCfg.embedUrl,
    tokenType: models.TokenType.Embed,
    accessToken: embedCfg.accessToken,  // short-lived
    permissions: models.Permissions.All,
    settings: { filterPaneEnabled: true, navContentPaneEnabled: true }
  };

  const report = powerbi.embed(document.getElementById('reportContainer'), config);

  // ... same filter/search code as above ...
})();