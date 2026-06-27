const sampleRows = [
  { order: 1, school: "中国计量大学", feature: "省重点/行业特色", risk: "冲", probability: "9%", major: "数据科学与大数据技术", plan: 50, minScore: 596, minRank: 56470 },
  { order: 2, school: "中国计量大学", feature: "省重点/行业特色", risk: "冲", probability: "11%", major: "人工智能", plan: 60, minScore: 595, minRank: 57039 },
  { order: 3, school: "浙江财经大学", feature: "省重点/保研", risk: "冲", probability: "13%", major: "软件工程", plan: 55, minScore: 595, minRank: 57316 },
  { order: 4, school: "浙江财经大学", feature: "省重点/保研", risk: "冲", probability: "14%", major: "应用统计学", plan: 10, minScore: 595, minRank: 57458 },
  { order: 5, school: "温州大学", feature: "省重点", risk: "冲", probability: "21%", major: "电气工程及其自动化(卓工超豪示范班)", plan: 107, minScore: 594, minRank: 58936 },
  { order: 6, school: "温州大学", feature: "省重点", risk: "冲", probability: "36%", major: "计算机科学与技术", plan: 62, minScore: 592, minRank: 61049 },
  { order: 7, school: "浙江农林大学", feature: "省重点/保研", risk: "冲", probability: "37%", major: "数据科学与大数据技术(东湖校区)", plan: 39, minScore: 592, minRank: 61206 },
  { order: 8, school: "浙江农林大学", feature: "省重点/保研", risk: "冲", probability: "41%", major: "智能科学与技术(东湖校区)", plan: 42, minScore: 591, minRank: 61809 },
  { order: 9, school: "浙江农林大学", feature: "省重点/保研", risk: "冲", probability: "47%", major: "电子信息工程(东湖校区)", plan: 77, minScore: 591, minRank: 62479 },
  { order: 10, school: "浙江农林大学", feature: "省重点/保研", risk: "稳", probability: "51%", major: "机械设计制造及其自动化", plan: 78, minScore: 590, minRank: 63205 },
  { order: 11, school: "浙江科技大学", feature: "应用型工科", risk: "稳", probability: "62%", major: "机器人工程(卓越创新班)", plan: 30, minScore: 587, minRank: 66373 },
  { order: 12, school: "浙江农林大学", feature: "省重点/保研", risk: "稳", probability: "65%", major: "应用统计学(东湖校区)", plan: 40, minScore: 587, minRank: 66367 },
  { order: 13, school: "浙大城市学院", feature: "杭州/应用型", risk: "稳", probability: "68%", major: "计算机科学与技术", plan: 95, minScore: 587, minRank: 67027 },
  { order: 14, school: "浙大城市学院", feature: "杭州/应用型", risk: "稳", probability: "70%", major: "人工智能", plan: 14, minScore: 587, minRank: 67409 },
  { order: 15, school: "温州大学", feature: "省重点", risk: "稳", probability: "71%", major: "信息与计算科学", plan: 27, minScore: 586, minRank: 67582 },
  { order: 16, school: "温州大学", feature: "省重点", risk: "稳", probability: "73%", major: "数据科学与大数据技术", plan: 52, minScore: 586, minRank: 68037 },
  { order: 17, school: "浙大城市学院", feature: "杭州/应用型", risk: "稳", probability: "76%", major: "自动化", plan: 65, minScore: 585, minRank: 68887 },
  { order: 20, school: "浙江传媒学院", feature: "传媒特色", risk: "稳", probability: "82%", major: "数字媒体技术", plan: 33, minScore: 582, minRank: 73367 },
  { order: 21, school: "浙江科技大学", feature: "应用型工科", risk: "保", probability: "87%", major: "电气工程及其自动化", plan: 145, minScore: 583, minRank: 71998 },
  { order: 22, school: "浙大城市学院", feature: "杭州/应用型", risk: "保", probability: "88%", major: "软件工程", plan: 95, minScore: 582, minRank: 72444 },
  { order: 25, school: "常州大学", feature: "外省/省重点", risk: "稳", probability: "42%", major: "人工智能(西太湖校区)", plan: 1, minScore: 581, minRank: 74117 },
  { order: 27, school: "浙江师范大学", feature: "省重点/保研", risk: "保", probability: "96%", major: "环境科学与工程", plan: 30, minScore: 579, minRank: 76210 },
  { order: 34, school: "浙江科技大学", feature: "应用型工科", risk: "保", probability: "99%", major: "软件工程(安吉校区)", plan: 113, minScore: 576, minRank: 80507 },
  { order: 43, school: "嘉兴大学", feature: "普通公办", risk: "保", probability: ">99%", major: "计算机科学与技术(梁林校区)", plan: 50, minScore: 572, minRank: 84809 },
];

const schoolProfiles = [
  { match: /中国计量大学/, score: 86, source: "学校层次：省重点/行业特色", text: "省重点、行业特色强，计量、质量、仪器、信息工程认可度较好；非双一流。" },
  { match: /浙江财经大学/, score: 85, source: "学校层次：省重点/财经特色/保研", text: "省重点、财经特色明显，有保研资格，省内财经口碑强；非双一流。" },
  { match: /浙江师范大学/, score: 84, source: "学校层次：省重点/保研", text: "省重点、有保研资格，省属综合层次较高；师范与基础学科更强。" },
  { match: /温州大学/, score: 78, source: "学校层次：省重点建设", text: "省重点建设高校，区域综合大学，省内认可度中上。" },
  { match: /浙江农林大学/, score: 77, source: "学校层次：省重点/保研", text: "省重点、有保研资格，杭州区位加分；信息类可选但不是学校最强底色。" },
  { match: /浙大城市学院/, score: 75, source: "学校层次：杭州/应用型本科", text: "杭州区位和品牌有加分，应用型本科，城市资源较好。" },
  { match: /浙江科技大学/, score: 73, source: "学校层次：应用型工科", text: "应用型工科院校，省内工科就业导向明确，实践型专业有性价比。" },
  { match: /浙江传媒学院/, score: 71, source: "学校层次：传媒特色", text: "传媒特色明显，数字媒体和传媒技术有学校特色；纯工科平台不如工科院校。" },
  { match: /浙江海洋大学/, score: 68, source: "学校层次：省内公办", text: "省内公办，区域和海洋特色明显，信息/电气可作就业型保底。" },
  { match: /嘉兴大学/, score: 64, source: "学校层次：普通公办", text: "普通省内公办，区位尚可，适合作为保专业和保公办选择。" },
  { match: /常州大学/, score: 66, source: "学校层次：外省省属高校", text: "外省省属高校，化工材料底色更强；小计划热门专业需谨慎。" },
];

const majorProfiles = [
  { match: /计算机科学与技术|软件工程/, employment: 92, postgrad: 82, civil: 88, category: "就业强", source: "岗位：Java/后端/测试/运维/政企信息化", text: "开发、测试、运维、数据开发和政企信息化岗位面宽；考研和考公适配都较好。" },
  { match: /电气工程|自动化/, employment: 88, postgrad: 80, civil: 62, category: "就业稳", source: "岗位：电气工程师/自动化/新能源/设备调试", text: "电气工程师、自动化、新能源、设备调试需求稳定；读研利于电网、设计院和国企。" },
  { match: /电子信息|通信工程/, employment: 84, postgrad: 82, civil: 65, category: "就业稳", source: "岗位：嵌入式/硬件测试/通信/物联网", text: "嵌入式、硬件测试、通信、物联网岗位较多；考研可转电子信息、通信、控制。" },
  { match: /数据科学|大数据|应用统计/, employment: 82, postgrad: 88, civil: 80, category: "考研考公友好", source: "岗位：数据分析/数仓/风控/统计调查", text: "可走数据分析、数仓、风控、金融科技；读研增值明显，考公有统计、税务、数字政务方向。" },
  { match: /人工智能|智能科学/, employment: 74, postgrad: 92, civil: 58, category: "读研增值", source: "岗位：算法/AI应用/数据/测试", text: "算法岗热但门槛高，本科更现实是开发、数据、测试或AI应用；读研提升明显。" },
  { match: /机器人工程/, employment: 78, postgrad: 82, civil: 45, category: "实践导向", source: "岗位：PLC/机器人调试/机器视觉/系统集成", text: "机器人调试、PLC、机器视觉、系统集成和智能制造方向；项目实践很关键。" },
  { match: /机械设计|智能制造/, employment: 70, postgrad: 70, civil: 42, category: "现场属性", source: "岗位：机械设计/工艺/设备/非标自动化", text: "机械设计、工艺、设备、非标自动化岗位稳定，但现场属性强，起薪通常普通。" },
  { match: /环境科学|环境工程/, employment: 56, postgrad: 78, civil: 72, category: "慎填", source: "岗位：环评/检测/EHS/生态环境考公", text: "环评、检测、环保工程、EHS有岗位，但本科就业弱于硬工科；更适合考研或环保考公。" },
  { match: /数字媒体技术/, employment: 76, postgrad: 68, civil: 55, category: "特色应用", source: "岗位：前端/交互/三维/传媒大数据", text: "适合前端、交互、三维、游戏技术、传媒大数据和数字产品，作品集和项目重要。" },
  { match: /信息与计算科学/, employment: 68, postgrad: 86, civil: 66, category: "考研增值", source: "方向：数学+计算机/统计/金融数学", text: "数学和计算机底子较好，直接就业不如计算机清晰，适合考研转计算机、统计或金融数学。" },
];

const headerAliases = {
  order: ["序号", "原序号"],
  school: ["院校", "学校", "院校名称", "学校名称"],
  feature: ["院校特色", "学校特色"],
  risk: ["风险标签", "风险"],
  probability: ["专业录取概率", "录取概率"],
  major: ["专业", "专业名称"],
  plan: ["计划", "招生计划", "计划数"],
  minScore: ["最低分", "分数线"],
  minRank: ["最低位次", "位次"],
};

let currentRows = [...sampleRows];
let analyzedRows = [];

function getProfile(list, value, fallback) {
  return list.find((item) => item.match.test(value)) || fallback;
}

function getRejectedPrefs() {
  return [...document.querySelectorAll(".check-list input:checked")].map((node) => node.value);
}

function getGoalWeights(goal) {
  const base = { admission: 0.25, school: 0.2, employment: 0.2, postgrad: 0.1, civil: 0.1, preference: 0.1 };
  if (goal === "employment") return { ...base, employment: 0.3, postgrad: 0.06, civil: 0.04 };
  if (goal === "postgraduate") return { ...base, postgrad: 0.18, employment: 0.16, civil: 0.06 };
  if (goal === "civil") return { ...base, civil: 0.18, employment: 0.16, postgrad: 0.06 };
  return base;
}

function admissionScore(row, rank) {
  const minRank = Number(row.minRank) || rank;
  const diff = minRank - rank;
  let score = 50;
  if (diff < -9000) score = 28;
  else if (diff < -5000) score = 40;
  else if (diff < -1200) score = 55;
  else if (diff < 1500) score = 68;
  else if (diff < 7000) score = 78;
  else if (diff < 15000) score = 88;
  else score = 94;
  if ((Number(row.plan) || 0) <= 2) score -= 14;
  return clamp(score, 10, 100);
}

function riskPenalty(row, prefs, majorProfile) {
  let penalty = 0;
  if ((Number(row.plan) || 0) <= 2) penalty += 12;
  if (prefs.includes("environment") && /环境/.test(row.major)) penalty += 18;
  if (prefs.includes("fieldwork") && /机械|机器人|智能制造/.test(row.major)) penalty += 8;
  if (prefs.includes("outsideSmallPlan") && !/浙江|温州|嘉兴|杭州|浙大|中国计量/.test(row.school) && (Number(row.plan) || 0) <= 2) penalty += 12;
  if (majorProfile.category === "慎填") penalty += 8;
  return penalty;
}

function analyzeRow(row) {
  const rank = Number(document.querySelector("#rankInput").value) || 62895;
  const goal = document.querySelector("#goalInput").value;
  const prefs = getRejectedPrefs();
  const schoolProfile = getProfile(schoolProfiles, row.school, {
    score: 62,
    source: "学校层次：待核",
    text: "学校层次需进一步核对，先按普通本科处理。",
  });
  const majorProfile = getProfile(majorProfiles, row.major, {
    employment: 62,
    postgrad: 65,
    civil: 55,
    category: "待核",
    source: "专业来源：待核",
    text: "专业出口需结合课程、就业岗位和学校介绍进一步核对。",
  });
  const admission = admissionScore(row, rank);
  const weights = getGoalWeights(goal);
  const preference = 82;
  const penalty = riskPenalty(row, prefs, majorProfile);
  const score =
    admission * weights.admission +
    schoolProfile.score * weights.school +
    majorProfile.employment * weights.employment +
    majorProfile.postgrad * weights.postgrad +
    majorProfile.civil * weights.civil +
    preference * weights.preference -
    penalty;
  const finalScore = Math.round(clamp(score, 20, 98));
  const tag = getTag(finalScore, penalty);
  const analysis = `${schoolProfile.text} 专业：${majorProfile.text} 综合：建议分 ${finalScore}，${tag}。`;
  const sources = `招录：浙江省教育考试院投档线；${schoolProfile.source}；${majorProfile.source}；考公：国考/省考职位表；就业：Boss直聘岗位关键词热度。`;
  return { ...row, score: finalScore, tag, analysis, sources, penalty };
}

function getTag(score, penalty) {
  if (score >= 84) return "前移";
  if (score < 58 || penalty >= 18) return "慎填";
  if (score < 68) return "后移";
  return "保留";
}

function sortForZhejiang(rows) {
  const tagBoost = { 前移: 8, 保留: 0, 后移: -8, 慎填: -22 };
  return [...rows].sort((a, b) => {
    const aValue = a.score + tagBoost[a.tag];
    const bValue = b.score + tagBoost[b.tag];
    if (bValue !== aValue) return bValue - aValue;
    return Number(a.order) - Number(b.order);
  });
}

function renderOriginal(rows) {
  document.querySelector("#originalBody").innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td>${escapeText(row.order)}</td>
          <td>${escapeText(row.school)}</td>
          <td>${escapeText(row.major)}</td>
          <td>${escapeText(row.risk)}</td>
          <td><span class="score-pill">${row.score}</span></td>
          <td><span class="tag-pill ${tagClass(row.tag)}">${row.tag}</span></td>
          <td class="analysis-cell">${escapeText(row.analysis)}</td>
          <td class="source-cell">${escapeText(row.sources)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderAdjusted(rows) {
  const adjusted = sortForZhejiang(rows);
  document.querySelector("#adjustedBody").innerHTML = adjusted
    .map((row, index) => {
      const changed = Number(row.order) !== index + 1;
      const remark = changed
        ? `按浙江规则调整：原序号 ${row.order} 调整到 ${index + 1}。理由：综合建议分 ${row.score}，标签为“${row.tag}”，系统认为它更适合放在当前位置。`
        : "原位置基本合理。";
      return `
        <tr class="${changed ? "highlight-row" : ""}">
          <td>${index + 1}</td>
          <td>${escapeText(row.order)}</td>
          <td>${escapeText(row.school)}</td>
          <td>${escapeText(row.major)}</td>
          <td><span class="score-pill">${row.score}</span></td>
          <td><span class="tag-pill ${tagClass(row.tag)}">${row.tag}</span></td>
          <td class="analysis-cell">${escapeText(remark)}</td>
        </tr>
      `;
    })
    .join("");
}

function updateSummary(rows) {
  const average = rows.length ? Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length) : 0;
  const adjusted = sortForZhejiang(rows).filter((row, index) => Number(row.order) !== index + 1).length;
  const caution = rows.filter((row) => row.tag === "慎填").length;
  document.querySelector("#summaryTitle").textContent = `已诊断 ${rows.length} 条志愿`;
  document.querySelector("#averageScore").textContent = average || "--";
  document.querySelector("#changedCount").textContent = adjusted;
  document.querySelector("#cautionCount").textContent = caution;
}

function runAnalysis() {
  analyzedRows = currentRows.map(analyzeRow);
  renderOriginal(analyzedRows);
  renderAdjusted(analyzedRows);
  updateSummary(analyzedRows);
}

function normalizeRow(raw, index) {
  const get = (field) => {
    const candidates = headerAliases[field];
    const key = Object.keys(raw).find((name) => candidates.includes(String(name).trim()));
    return key ? raw[key] : "";
  };
  return {
    order: Number(get("order")) || index + 1,
    school: String(get("school") || "").trim(),
    feature: String(get("feature") || "").trim(),
    risk: String(get("risk") || "").trim(),
    probability: String(get("probability") || "").trim(),
    major: String(get("major") || "").trim(),
    plan: Number(get("plan")) || "",
    minScore: Number(get("minScore")) || "",
    minRank: Number(get("minRank")) || "",
  };
}

function handleFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  document.querySelector("#fileLabel").textContent = file.name;
  if (!window.XLSX) {
    alert("Excel 解析库没有加载成功，可以先用示例数据。");
    return;
  }
  const reader = new FileReader();
  reader.onload = (loadEvent) => {
    const workbook = XLSX.read(loadEvent.target.result, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawRows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
    const normalized = rawRows.map(normalizeRow).filter((row) => row.school && row.major);
    if (!normalized.length) {
      alert("没有识别到学校和专业列。请确认表头包含“院校”和“专业”。");
      return;
    }
    currentRows = normalized;
    runAnalysis();
  };
  reader.readAsArrayBuffer(file);
}

function exportReport() {
  if (!window.XLSX) {
    alert("Excel 导出库没有加载成功。");
    return;
  }
  if (!analyzedRows.length) runAnalysis();
  const originalSheet = analyzedRows.map((row) => ({
    原序号: row.order,
    院校: row.school,
    专业: row.major,
    风险标签: row.risk,
    计划: row.plan,
    最低分: row.minScore,
    最低位次: row.minRank,
    综合建议分: row.score,
    调整标签: row.tag,
    "学校层次+就业/考公/考研分析": row.analysis,
    主要来源: row.sources,
  }));
  const adjustedSheet = sortForZhejiang(analyzedRows).map((row, index) => ({
    调整序号: index + 1,
    原序号: row.order,
    院校: row.school,
    专业: row.major,
    综合建议分: row.score,
    调整标签: row.tag,
    排序备注:
      Number(row.order) === index + 1
        ? "原位置基本合理。"
        : `按浙江规则调整：原序号 ${row.order} 调整到 ${index + 1}。`,
  }));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(originalSheet), "原表分析");
  XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(adjustedSheet), "建议排序");
  XLSX.writeFile(workbook, "志愿诊断报告-原型导出.xlsx");
}

function tagClass(tag) {
  if (tag === "前移") return "forward";
  if (tag === "后移") return "backward";
  if (tag === "慎填") return "caution";
  return "";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function switchTab(tab) {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.remove("active-view");
  });
  document.querySelector(`#${tab}View`).classList.add("active-view");
}

document.querySelector("#fileInput").addEventListener("change", handleFile);
document.querySelector("#analyzeButton").addEventListener("click", runAnalysis);
document.querySelector("#exportButton").addEventListener("click", exportReport);
document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});
document.querySelectorAll("input, select").forEach((input) => {
  input.addEventListener("change", () => {
    if (analyzedRows.length) runAnalysis();
  });
});

runAnalysis();
