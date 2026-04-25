const SAM_REPORT_CSS = `
:root{--sam-blue:#0B3A75;--sam-blue-2:#1456A0;--sam-green:#8BC34A;--ink:#132238;--muted:#667085;--line:#E6EAF0;--bg:#F4F7FB;--card:#FFFFFF;--danger:#D92D20;--warn:#F79009}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,Segoe UI,Arial,sans-serif;color:var(--ink)}
.page{max-width:1180px;margin:0 auto;padding:28px}.hero{background:linear-gradient(135deg,var(--sam-blue),#071E3D);color:#fff;border-radius:28px;padding:34px;position:relative;overflow:hidden;box-shadow:0 20px 50px rgba(11,58,117,.18)}
.hero:after{content:"";position:absolute;right:-120px;top:-120px;width:360px;height:360px;border-radius:50%;background:rgba(139,195,74,.22)}.hero:before{content:"";position:absolute;right:90px;bottom:-90px;width:230px;height:230px;border-radius:50%;border:38px solid rgba(139,195,74,.16)}
.logo{font-weight:900;letter-spacing:.08em;color:#fff;font-size:14px;margin-bottom:24px;position:relative;z-index:1}.logo span{color:var(--sam-green)}.hero-content{position:relative;z-index:2}
.eyebrow{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#BFEA8A;margin-bottom:10px}h1{font-size:34px;line-height:1.08;margin:0 0 12px;font-weight:850;letter-spacing:-.03em;max-width:780px}.subtitle{font-size:16px;line-height:1.55;color:#D9E7F7;max-width:830px;margin:0}
.stamp{display:inline-flex;gap:8px;align-items:center;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);padding:9px 13px;border-radius:999px;margin-top:22px;font-weight:700;font-size:13px}
.grid{display:grid;gap:16px;margin-top:18px}.kpis{grid-template-columns:repeat(4,1fr)}.card{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 10px 28px rgba(18,35,56,.06)}
.kpi-label{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);font-weight:800}.kpi-value{font-size:30px;font-weight:850;margin-top:10px;letter-spacing:-.03em}.kpi-note{font-size:13px;color:var(--muted);margin-top:8px;line-height:1.35}
.section{margin-top:22px}.section-title{display:flex;justify-content:space-between;align-items:end;margin:0 0 12px}h2{font-size:22px;margin:0;font-weight:850;letter-spacing:-.02em;color:var(--sam-blue)}
.tag{font-size:12px;font-weight:800;border-radius:999px;padding:7px 10px;background:#E9F5DD;color:#397516;border:1px solid #D6EDC2}.tag-critical{background:#FEE4E2;color:#B42318;border:1px solid #FECDCA}
.cols-2{grid-template-columns:1.08fr .92fr}.cols-3{grid-template-columns:repeat(3,1fr)}.headline{font-size:24px;font-weight:850;line-height:1.2;margin:0 0 10px;color:var(--ink);letter-spacing:-.02em}.text{font-size:15px;line-height:1.55;color:#344054;margin:0}
.callout{border-left:6px solid var(--sam-green);background:#F8FCF3}.danger{border-left-color:var(--danger);background:#FFF7F5}.warn{border-left-color:var(--warn);background:#FFFAEB}
table{width:100%;border-collapse:collapse;font-size:14px;overflow:hidden;border-radius:16px}th{text-align:left;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#667085;background:#F7F9FC;padding:12px;border-bottom:1px solid var(--line)}td{padding:13px 12px;border-bottom:1px solid var(--line);vertical-align:top}tr:last-child td{border-bottom:none}
.money{font-weight:850;color:var(--sam-blue)}.pill{display:inline-flex;padding:5px 9px;border-radius:999px;font-size:12px;font-weight:800;white-space:nowrap}.p-red{background:#FEE4E2;color:#B42318}.p-blue{background:#E8F1FD;color:#0B4F9C}.p-orange{background:#FEF0C7;color:#B54708}
.bar-row{display:grid;grid-template-columns:170px 1fr 48px;gap:10px;align-items:center;margin:13px 0}.bar-label{font-size:13px;font-weight:750;color:#344054}.bar-track{height:12px;background:#EEF2F6;border-radius:999px;overflow:hidden}.bar-fill{height:100%;background:linear-gradient(90deg,var(--sam-blue-2),var(--sam-green));border-radius:999px}.bar-value{text-align:right;font-size:13px;font-weight:850}
.action-list{display:grid;gap:10px;margin:0;padding:0;list-style:none}.action-list li{display:grid;grid-template-columns:30px 1fr;gap:10px;align-items:start;padding:13px;border:1px solid var(--line);border-radius:16px;background:#fff}.num{width:30px;height:30px;border-radius:10px;background:var(--sam-blue);color:#fff;display:grid;place-items:center;font-size:13px;font-weight:850}
.footer{margin-top:24px;padding:18px 4px;color:#667085;font-size:12px;display:flex;justify-content:space-between;gap:12px}
@media(max-width:900px){.kpis,.cols-2,.cols-3{grid-template-columns:1fr}.page{padding:14px}h1{font-size:28px}.hero{padding:26px}.footer{display:block}}
@media print{body{background:#fff}.page{max-width:none;padding:12px}.card,.hero{box-shadow:none}.hero,.section{break-inside:avoid}.footer{display:none}}
`;

const SAM_REPORT_TEMPLATE = `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>SAM | Relatório Executivo Comercial</title><style>${SAM_REPORT_CSS}</style></head><body>
<main class="page">
<section class="hero"><div class="hero-content"><div class="logo">SAM<span>24H</span> · COMERCIAL</div><div class="eyebrow">Relatório executivo</div><h1>{{title}}</h1><p class="subtitle">{{subtitle}}</p><div class="stamp">Base analisada: {{baseAnalyzed}} · Atualizado em {{reportDate}}</div></div></section>
<section class="grid kpis">
<div class="card"><div class="kpi-label">Negócios totais</div><div class="kpi-value">{{kpiTotalDeals}}</div><div class="kpi-note">{{kpiTotalDealsNote}}</div></div>
<div class="card"><div class="kpi-label">Pipeline aberto</div><div class="kpi-value">{{kpiPipeline}}</div><div class="kpi-note">Valor aberto com negócios em andamento.</div></div>
<div class="card"><div class="kpi-label">Receita ganha</div><div class="kpi-value">{{kpiRevenueWon}}</div><div class="kpi-note">Resumo de negociações fechadas como ganho.</div></div>
<div class="card"><div class="kpi-label">Sem atividade</div><div class="kpi-value">{{kpiNoActivity}}</div><div class="kpi-note">Negócios sem próxima ação cadastrada.</div></div>
</section>
<section class="section grid cols-2"><div class="card callout"><div class="section-title"><h2>Leitura</h2><span class="tag">Resumo decisório</span></div><p class="headline">Existe dinheiro no funil, mas o funil ainda não está sob comando.</p><p class="text">{{executiveRead}}</p></div>
<div class="card danger"><div class="section-title"><h2>Alerta da semana</h2><span class="tag tag-critical">Crítico</span></div><p class="headline">Pipeline sem próxima ação vira ilusão de receita.</p><p class="text">{{mainAlert}}</p></div></section>
<section class="section grid cols-2"><div class="card"><div class="section-title"><h2>Distribuição do funil</h2></div>{{phaseBars}}</div><div class="card"><div class="section-title"><h2>Status do pipeline</h2></div>{{statusBars}}<p class="text" style="margin-top:18px">A relação entre ganhos e perdas ainda aponta necessidade de melhorar qualificação, condução e fechamento.</p></div></section>
<section class="section card"><div class="section-title"><h2>Top oportunidades para ataque imediato</h2><span class="tag">Foco: fechamento</span></div><table><thead><tr><th>Negócio</th><th>Fase</th><th>Valor</th><th>Dias sem interação</th><th>Próxima ação</th></tr></thead><tbody>{{opportunityRows}}</tbody></table></section>
<section class="section card"><div class="section-title"><h2>Plano de ação para a próxima semana</h2><span class="tag">Execução prática</span></div><ul class="action-list">{{actionItems}}</ul></section>
<section class="section grid cols-2"><div class="card"><div class="section-title"><h2>Forecast executivo</h2></div><table><tbody><tr><td>Pipeline aberto com valor</td><td class="money">{{kpiPipeline}}</td></tr><tr><td>Receita já ganha</td><td class="money">{{kpiRevenueWon}}</td></tr><tr><td>Negócios sem atividade</td><td><span class="pill p-red">{{kpiNoActivity}}</span></td></tr></tbody></table></div><div class="card callout"><div class="section-title"><h2>Mensagem final</h2></div><p class="headline">A próxima semana deve ser de decisão, não de acompanhamento.</p><p class="text">{{finalMessage}}</p></div></section>
<footer class="footer"><div>SAM24H · Relatório Executivo Comercial · Pipeline Vendas SAM</div><div>Gerado automaticamente pelo template padrão SAM</div></footer>
</main></body></html>`;

const fields = [
  "title", "subtitle", "baseAnalyzed", "reportDate", "kpiTotalDeals", "kpiPipeline", "kpiRevenueWon", "kpiNoActivity",
  "executiveRead", "mainAlert", "finalMessage", "phaseDistribution", "statusDistribution", "opportunities", "actionPlan",
];

const els = Object.fromEntries(fields.map((id) => [id, document.getElementById(id)]));
const cssFileInput = document.getElementById("cssFile");
const statusEl = document.getElementById("status");
const previewFrame = document.getElementById("previewFrame");
let loadedCssText = "";

function defaultData() {
  const date = new Date().toLocaleDateString("pt-BR");
  return {
    title: "Pipeline com oportunidade real, mas ainda sem governança suficiente para previsibilidade.",
    subtitle: "Não informado.",
    baseAnalyzed: "Não informado",
    reportDate: date,
    kpiTotalDeals: "Não informado",
    kpiPipeline: "Não informado",
    kpiRevenueWon: "Não informado",
    kpiNoActivity: "Não informado",
    executiveRead: "Não informado.",
    mainAlert: "Não informado.",
    finalMessage: "O foco da liderança comercial deve ser cobrar movimento real nas propostas abertas, limpar o que não tem fit e instalar disciplina mínima no CRM.",
    phaseDistribution: "Não informado|0",
    statusDistribution: "Em aberto|0\nPerdidos|0\nGanhos|0",
    opportunities: "Não informado|Não informado|Não informado|0|Não informado",
    actionPlan: "Atacar propostas prioritárias.\nRegistrar próxima atividade em todos os negócios abertos.\nAtualizar valores estimados onde faltam dados.",
  };
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function readFormData() {
  const data = {};
  fields.forEach((key) => {
    data[key] = els[key].value.trim();
  });
  return data;
}

function writeFormData(data) {
  fields.forEach((key) => {
    els[key].value = data[key] ?? "";
  });
}

function extractQuotedTexts(cssText) {
  const matches = [...cssText.matchAll(/['"]([^'"\n]{4,})['"]/g)];
  return matches.map((m) => m[1].trim());
}

function extractMoneyValues(cssText) {
  return [...cssText.matchAll(/R\$\s?[\d\.]+(?:,\d{1,2})?/g)].map((m) => m[0]);
}

function findFirst(cssText, patterns, fallback = "Não informado") {
  for (const pattern of patterns) {
    const match = cssText.match(pattern);
    if (match?.[1]) {
      return match[1].trim();
    }
  }
  return fallback;
}

function parseLines(text, minParts) {
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split("|").map((part) => part.trim()))
    .filter((parts) => parts.length >= minParts);
}

function buildBars(lines) {
  const parsed = parseLines(lines, 2);
  const max = Math.max(...parsed.map((parts) => Number(parts[1]) || 0), 1);
  return parsed
    .map(([label, raw]) => {
      const val = Number(raw) || 0;
      const width = Math.round((val / max) * 100);
      return `<div class="bar-row"><div class="bar-label">${escapeHtml(label)}</div><div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div><div class="bar-value">${val}</div></div>`;
    })
    .join("");
}

function buildOpportunityRows(lines) {
  const parsed = parseLines(lines, 5);
  if (!parsed.length) {
    return '<tr><td colspan="5">Não informado</td></tr>';
  }
  return parsed
    .map(([deal, phase, value, days, action]) => {
      const daysNum = Number(days) || 0;
      const pillClass = daysNum >= 20 ? "p-red" : "p-orange";
      return `<tr><td>${escapeHtml(deal)}</td><td><span class="pill p-blue">${escapeHtml(phase)}</span></td><td class="money">${escapeHtml(value)}</td><td><span class="pill ${pillClass}">${daysNum} dias</span></td><td>${escapeHtml(action)}</td></tr>`;
    })
    .join("");
}

function buildActionItems(lines) {
  const parsed = lines.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  return parsed
    .map((item, idx) => `<li><span class="num">${idx + 1}</span><div><strong>${escapeHtml(item)}</strong></div></li>`)
    .join("");
}

function renderHtml(data) {
  const rawHtmlKeys = new Set(["phaseBars", "statusBars", "opportunityRows", "actionItems"]);
  const replacements = {
    ...data,
    phaseBars: buildBars(data.phaseDistribution),
    statusBars: buildBars(data.statusDistribution),
    opportunityRows: buildOpportunityRows(data.opportunities),
    actionItems: buildActionItems(data.actionPlan),
    kpiTotalDealsNote: data.kpiTotalDeals === "Não informado" ? "Não informado." : "Total de negócios identificados no arquivo de origem.",
  };

  return SAM_REPORT_TEMPLATE.replace(/{{(\w+)}}/g, (_, key) => {
    const value = replacements[key] ?? "Não informado";
    return rawHtmlKeys.has(key) ? value : escapeHtml(value);
  });
}

function extractFromCss(cssText) {
  const extracted = defaultData();
  const quoted = extractQuotedTexts(cssText);
  const moneyValues = extractMoneyValues(cssText);
  const numbers = [...cssText.matchAll(/\b\d{1,4}\b/g)].map((m) => m[0]);

  extracted.title = findFirst(cssText, [/--titulo\s*:\s*['"]([^'"]+)['"]/i, /--title\s*:\s*['"]([^'"]+)['"]/i], quoted[0] || extracted.title);
  extracted.subtitle = findFirst(cssText, [/--subtitulo\s*:\s*['"]([^'"]+)['"]/i, /--subtitle\s*:\s*['"]([^'"]+)['"]/i], quoted[1] || extracted.subtitle);
  extracted.baseAnalyzed = findFirst(cssText, [/base analisada[^\d]*(\d+\s*negócios?)/i, /--base\s*:\s*['"]([^'"]+)['"]/i], extracted.baseAnalyzed);
  extracted.kpiTotalDeals = findFirst(cssText, [/negócios totais[^\d]*(\d+)/i, /--kpi-total\s*:\s*['"]([^'"]+)['"]/i], numbers[0] || extracted.kpiTotalDeals);
  extracted.kpiPipeline = findFirst(cssText, [/pipeline aberto[^R$]*(R\$\s?[\d\.]+(?:,\d{1,2})?)/i, /--kpi-pipeline\s*:\s*['"]([^'"]+)['"]/i], moneyValues[0] || extracted.kpiPipeline);
  extracted.kpiRevenueWon = findFirst(cssText, [/receita ganha[^R$]*(R\$\s?[\d\.]+(?:,\d{1,2})?)/i, /--kpi-ganho\s*:\s*['"]([^'"]+)['"]/i], moneyValues[1] || extracted.kpiRevenueWon);
  extracted.kpiNoActivity = findFirst(cssText, [/sem atividade[^\d]*(\d+\/?\d*)/i, /--kpi-sem-atividade\s*:\s*['"]([^'"]+)['"]/i], extracted.kpiNoActivity);

  extracted.executiveRead = findFirst(cssText, [/leitura[^\n]*:\s*['"]([^'"]+)['"]/i, /resumo[^\n]*:\s*['"]([^'"]+)['"]/i], quoted[2] || extracted.executiveRead);
  extracted.mainAlert = findFirst(cssText, [/alerta[^\n]*:\s*['"]([^'"]+)['"]/i], quoted[3] || extracted.mainAlert);
  extracted.finalMessage = findFirst(cssText, [/mensagem final[^\n]*:\s*['"]([^'"]+)['"]/i], quoted[4] || extracted.finalMessage);

  extracted.phaseDistribution = findFirst(
    cssText,
    [/--distribuicao-funil\s*:\s*['"]([^'"]+)['"]/i],
    "Central de leads|14\nProposta enviada|11\nQualificação|5\nDiagnóstico|4\nLead contactado|3",
  );
  extracted.statusDistribution = findFirst(cssText, [/--status-pipeline\s*:\s*['"]([^'"]+)['"]/i], extracted.statusDistribution);
  extracted.opportunities = findFirst(
    cssText,
    [/--oportunidades\s*:\s*['"]([^'"]+)['"]/i],
    "Não informado|Não informado|Não informado|0|Não informado",
  );
  extracted.actionPlan = findFirst(cssText, [/--plano-acao\s*:\s*['"]([^'"]+)['"]/i], extracted.actionPlan);

  return extracted;
}

function generatePreview() {
  const data = readFormData();
  const html = renderHtml(data);
  previewFrame.srcdoc = html;
  return html;
}

function downloadHtml() {
  const html = generatePreview();
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `relatorio-sam-${new Date().toISOString().slice(0, 10)}.html`;
  link.click();
  URL.revokeObjectURL(link.href);
}

document.getElementById("extractBtn").addEventListener("click", async () => {
  const file = cssFileInput.files?.[0];
  if (!file) {
    statusEl.textContent = "Selecione um arquivo .css antes de extrair.";
    return;
  }

  loadedCssText = await file.text();
  const extracted = extractFromCss(loadedCssText);
  writeFormData(extracted);
  statusEl.textContent = `Dados extraídos de ${file.name}. Revise os campos e gere a prévia.`;
});

document.getElementById("previewBtn").addEventListener("click", () => {
  generatePreview();
  statusEl.textContent = "Prévia atualizada com os dados informados.";
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  downloadHtml();
  statusEl.textContent = "HTML final gerado e download iniciado.";
});

writeFormData(defaultData());
previewFrame.srcdoc = renderHtml(defaultData());
