/* =========================================================
   Ligação à base de dados (Supabase)
   - SUPABASE_URL e SUPABASE_ANON_KEY: Project Settings → API
   - A "anon public key" pode estar no site (é pública por natureza;
     a segurança está nas regras da base de dados — supabase/schema.sql).
   - NUNCA colocar aqui a "service_role" key.
   Se ficar vazio, o site funciona em modo demonstração (dados do navegador).
   ========================================================= */
window.SS_CONFIG = {
  SUPABASE_URL: "https://vvphwodoemybalvvloim.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_rp2pxHK_FU9EytBLWeDjvg_lvz2L1oo",   // chave publicável (segura no site)
};
