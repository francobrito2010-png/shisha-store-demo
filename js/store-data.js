/* =========================================================
   Dados guardados pelo back office (admin.html)
   Carregado depois de data.js: se existirem alterações feitas no
   painel, substituem o catálogo e os dados da loja.
   Na demonstração ficam guardadas neste navegador (localStorage);
   para publicar, usar "Exportar data.js" no painel.
   ========================================================= */
(() => {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("ss_catalog")); } catch {}
  if (!saved) return;
  const lists = { shishas: SHISHAS, essencias: ESSENCIAS, carvao: CARVAO, acessorios: ACESSORIOS, packs: PACKS };
  for (const [k, arr] of Object.entries(lists)) {
    if (Array.isArray(saved[k])) arr.splice(0, arr.length, ...saved[k]);
  }
  if (saved.store) Object.assign(STORE, saved.store);
})();

// Na loja, os produtos ocultos não aparecem (no painel aparecem todos)
if (!window.SS_ADMIN) {
  [SHISHAS, ESSENCIAS, CARVAO, ACESSORIOS, PACKS].forEach(arr => {
    for (let i = arr.length - 1; i >= 0; i--) if (arr[i].oculto) arr.splice(i, 1);
  });
}
