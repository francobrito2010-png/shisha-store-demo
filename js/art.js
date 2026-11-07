/* Ilustrações SVG temporárias (v1.0) — substituídas automaticamente
   quando o produto tem  img: "img/ficheiro.jpg"  em data.js. */

const Art = (() => {
  const shade = (hex, amt) => {
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
    r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
    return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
  };

  // Shisha: a altura real (cm) altera a proporção do tubo
  function shisha(cor, altura = 45) {
    const h = Math.max(0.55, Math.min(1, altura / 65));
    const stemTop = 150 - 105 * h;
    const light = shade(cor, 60), dark = shade(cor, -40);
    return `<svg viewBox="0 0 200 200" class="art" aria-hidden="true">
      <defs>
        <linearGradient id="g${cor.slice(1)}" x1="0" x2="1"><stop offset="0" stop-color="${dark}"/><stop offset=".45" stop-color="${light}"/><stop offset="1" stop-color="${cor}"/></linearGradient>
      </defs>
      <ellipse cx="100" cy="188" rx="46" ry="5" fill="#000" opacity=".08"/>
      <path d="M100 ${stemTop + 14} C 70 ${stemTop + 40}, 52 ${stemTop + 60}, 58 150" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/>
      <path d="M68 148 Q100 136 132 148 Q150 168 132 186 L68 186 Q50 168 68 148Z" fill="url(#g${cor.slice(1)})" opacity=".92"/>
      <path d="M78 156 Q84 166 80 178" stroke="#fff" stroke-width="3" opacity=".35" fill="none" stroke-linecap="round"/>
      <rect x="95" y="${stemTop}" width="10" height="${150 - stemTop}" rx="3" fill="#cfcfcf"/>
      <rect x="95" y="${stemTop}" width="4" height="${150 - stemTop}" rx="2" fill="#fff" opacity=".6"/>
      <rect x="90" y="${stemTop + 18}" width="20" height="6" rx="2" fill="${cor}"/>
      <ellipse cx="100" cy="${stemTop - 2}" rx="30" ry="5" fill="#bdbdbd"/>
      <path d="M86 ${stemTop - 24} L114 ${stemTop - 24} L108 ${stemTop - 6} L92 ${stemTop - 6}Z" fill="${dark}"/>
      <rect x="84" y="${stemTop - 28}" width="32" height="6" rx="2" fill="#9a9a9a"/>
    </svg>`;
  }

  function essencia(cor, sabor = "") {
    const dark = shade(cor, -50), light = shade(cor, 70);
    return `<svg viewBox="0 0 200 200" class="art" aria-hidden="true">
      <ellipse cx="100" cy="182" rx="48" ry="6" fill="#000" opacity=".08"/>
      <rect x="54" y="48" width="92" height="132" rx="10" fill="#1a1a1a"/>
      <rect x="54" y="40" width="92" height="22" rx="8" fill="#2a2a2a"/>
      <rect x="54" y="78" width="92" height="76" fill="${cor}"/>
      <circle cx="100" cy="116" r="24" fill="${light}" opacity=".9"/>
      <circle cx="92" cy="110" r="7" fill="${dark}" opacity=".5"/>
      <circle cx="108" cy="122" r="9" fill="${dark}" opacity=".35"/>
      <text x="100" y="72" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="10" fill="#fff" letter-spacing="1">ADALYA</text>
      <text x="100" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="9" fill="#fff">${sabor.toUpperCase().slice(0, 16)}</text>
    </svg>`;
  }

  function carvao(cor) {
    let cubes = "";
    const pos = [[62,120],[98,120],[134,120],[80,90],[116,90],[98,60]];
    pos.forEach(([x, y], i) => {
      cubes += `<g transform="translate(${x - 18} ${y})">
        <path d="M0 10 L18 0 L36 10 L18 20Z" fill="${shade(cor, 30)}"/>
        <path d="M0 10 L18 20 L18 46 L0 36Z" fill="${shade(cor, -10)}"/>
        <path d="M36 10 L18 20 L18 46 L36 36Z" fill="${shade(cor, -30)}"/>
        ${i === 5 ? `<path d="M18 -6 q6 -10 0 -18 q10 6 6 18Z" fill="#f97316" opacity=".85"/>` : ""}
      </g>`;
    });
    return `<svg viewBox="0 0 200 200" class="art" aria-hidden="true">
      <ellipse cx="100" cy="176" rx="64" ry="6" fill="#000" opacity=".08"/>${cubes}</svg>`;
  }

  function acessorio(cor, nome = "") {
    const n = nome.toLowerCase();
    let body;
    if (n.includes("kaloud") || n.includes("gestor")) {
      body = `<ellipse cx="100" cy="128" rx="52" ry="12" fill="${shade(cor,-30)}"/><path d="M48 128 L60 92 L140 92 L152 128Z" fill="${cor}"/><ellipse cx="100" cy="92" rx="40" ry="9" fill="${shade(cor,40)}"/><rect x="92" y="62" width="16" height="22" rx="4" fill="#333"/>`;
    } else if (n.includes("mangueira")) {
      body = `<path d="M50 150 C 40 60, 160 60, 150 140" fill="none" stroke="${cor}" stroke-width="12" stroke-linecap="round"/><rect x="140" y="132" width="20" height="34" rx="5" fill="#333"/><rect x="40" y="142" width="20" height="30" rx="5" fill="#bbb"/>`;
    } else if (n.includes("boquilha")) {
      body = `<path d="M84 50 L116 50 L110 160 Q100 172 90 160Z" fill="${cor}"/><path d="M90 60 L94 150" stroke="#fff" opacity=".4" stroke-width="3"/><rect x="82" y="40" width="36" height="14" rx="5" fill="${shade(cor,-40)}"/>`;
    } else if (n.includes("led")) {
      body = `<circle cx="100" cy="110" r="46" fill="${cor}" opacity=".18"/><circle cx="100" cy="110" r="30" fill="${cor}" opacity=".35"/><rect x="66" y="104" width="68" height="14" rx="7" fill="#222"/><circle cx="84" cy="111" r="3" fill="${cor}"/><circle cx="100" cy="111" r="3" fill="#22d3ee"/><circle cx="116" cy="111" r="3" fill="#f43f5e"/>`;
    } else if (n.includes("pinça")) {
      body = `<path d="M60 160 L140 50" stroke="${cor}" stroke-width="8" stroke-linecap="round"/><path d="M76 166 L150 62" stroke="${shade(cor,-30)}" stroke-width="8" stroke-linecap="round"/>`;
    } else if (n.includes("cabeçote")) {
      body = `<path d="M60 70 L140 70 L124 140 L76 140Z" fill="${cor}"/><ellipse cx="100" cy="70" rx="40" ry="10" fill="${shade(cor,30)}"/><ellipse cx="100" cy="70" rx="28" ry="6" fill="${shade(cor,-40)}"/><rect x="90" y="140" width="20" height="22" fill="${shade(cor,-20)}"/>`;
    } else if (n.includes("vento")) {
      body = `<path d="M60 150 L64 70 Q100 50 136 70 L140 150Z" fill="${cor}" opacity=".9"/>${[0,1,2,3].map(i=>`<circle cx="${78+i*15}" cy="100" r="4" fill="#666"/>`).join("")}<ellipse cx="100" cy="66" rx="38" ry="8" fill="${shade(cor,-30)}"/>`;
    } else if (n.includes("forno")) {
      body = `<rect x="52" y="90" width="96" height="60" rx="8" fill="#333"/><circle cx="100" cy="90" r="34" fill="${cor}"/><circle cx="100" cy="90" r="24" fill="#ef4444" opacity=".7"/><circle cx="130" cy="130" r="5" fill="#22c55e"/>`;
    } else {
      body = `<ellipse cx="100" cy="132" rx="60" ry="16" fill="${shade(cor,-30)}"/><ellipse cx="100" cy="122" rx="60" ry="16" fill="${cor}"/>`;
    }
    return `<svg viewBox="0 0 200 200" class="art" aria-hidden="true"><ellipse cx="100" cy="180" rx="50" ry="5" fill="#000" opacity=".07"/>${body}</svg>`;
  }

  function pack(cor) {
    return `<svg viewBox="0 0 200 200" class="art" aria-hidden="true">
      <ellipse cx="100" cy="182" rx="66" ry="6" fill="#000" opacity=".08"/>
      <path d="M36 70 L100 46 L164 70 L100 94Z" fill="${shade(cor, 40)}"/>
      <path d="M36 70 L100 94 L100 178 L36 154Z" fill="${cor}"/>
      <path d="M164 70 L100 94 L100 178 L164 154Z" fill="${shade(cor, -35)}"/>
      <path d="M64 59 L128 83 L128 104 L64 80Z" fill="#fff" opacity=".18"/>
      <text x="68" y="132" font-family="Archivo Black, sans-serif" font-size="13" fill="#fff" transform="skewY(20) translate(0 -24)">PACK</text>
    </svg>`;
  }

  // Logotipo provisório inspirado no do Instagram (substituir por img/logo.svg do cliente)
  const logo = `<svg viewBox="0 0 190 52" class="logo__svg" role="img" aria-label="Shisha Store">
    <text x="0" y="27" font-family="Archivo Black, sans-serif" font-size="27" letter-spacing="1" fill="currentColor">SHISHA</text>
    <rect x="0" y="33" width="122" height="17" rx="2" fill="currentColor"/>
    <text x="61" y="46.5" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="12.5" letter-spacing="7" class="logo__inv">STORE</text>
    <g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" transform="translate(132 2)">
      <path d="M22 4h12l-2 7h-8z"/><path d="M18 13h20"/><path d="M28 13v20"/>
      <path d="M20 34q8-6 16 0q6 8 0 14H20q-6-6 0-14z"/>
      <path d="M28 20q-16 4-22 24"/><circle cx="6" cy="46" r="2.2" fill="currentColor"/>
    </g>
  </svg>`;

  return { shisha, essencia, carvao, acessorio, pack, shade, logo };
})();
