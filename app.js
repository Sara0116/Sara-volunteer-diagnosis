const sampleRows = [
  { order: 1, school: "中国计量大学", feature: "省重点/行业特色", risk: "冲", probability: "9%", major: "数据科学与大数据技术", plan: 50, tuition: 4800, admissionCount: 50, minScore: 596, minRank: 56470 },
  { order: 2, school: "中国计量大学", feature: "省重点/行业特色", risk: "冲", probability: "11%", major: "人工智能", plan: 60, tuition: 5500, admissionCount: 76, minScore: 595, minRank: 57039 },
  { order: 3, school: "浙江财经大学", feature: "省重点/保研", risk: "冲", probability: "13%", major: "软件工程", plan: 55, tuition: 6000, admissionCount: 145, minScore: 595, minRank: 57316 },
  { order: 4, school: "浙江财经大学", feature: "省重点/保研", risk: "冲", probability: "14%", major: "应用统计学", plan: 10, tuition: 5300, admissionCount: 30, minScore: 595, minRank: 57458 },
  { order: 5, school: "温州大学", feature: "省重点", risk: "冲", probability: "21%", major: "电气工程及其自动化(卓工超豪示范班)", plan: 107, tuition: 5500, admissionCount: 98, minScore: 594, minRank: 58936 },
  { order: 6, school: "温州大学", feature: "省重点", risk: "冲", probability: "36%", major: "计算机科学与技术", plan: 62, tuition: 5500, admissionCount: 74, minScore: 592, minRank: 61049 },
  { order: 7, school: "浙江农林大学", feature: "省重点/保研", risk: "冲", probability: "37%", major: "数据科学与大数据技术(东湖校区)", plan: 39, tuition: 6000, admissionCount: 39, minScore: 592, minRank: 61206 },
  { order: 8, school: "浙江农林大学", feature: "省重点/保研", risk: "冲", probability: "41%", major: "智能科学与技术(东湖校区)", plan: 42, tuition: 6000, admissionCount: 42, minScore: 591, minRank: 61809 },
  { order: 9, school: "浙江农林大学", feature: "省重点/保研", risk: "冲", probability: "47%", major: "电子信息工程(东湖校区)", plan: 77, tuition: 6000, admissionCount: 81, minScore: 591, minRank: 62479 },
  { order: 10, school: "浙江农林大学", feature: "省重点/保研", risk: "稳", probability: "51%", major: "机械设计制造及其自动化", plan: 78, tuition: 6000, admissionCount: 61, minScore: 590, minRank: 63205 },
  { order: 11, school: "浙江科技大学", feature: "应用型工科", risk: "稳", probability: "62%", major: "机器人工程(卓越创新班)", plan: 30, tuition: 6300, admissionCount: 30, minScore: 587, minRank: 66373 },
  { order: 12, school: "浙江农林大学", feature: "省重点/保研", risk: "稳", probability: "65%", major: "应用统计学(东湖校区)", plan: 40, tuition: 5300, admissionCount: 39, minScore: 587, minRank: 66367 },
  { order: 13, school: "浙大城市学院", feature: "杭州/应用型", risk: "稳", probability: "68%", major: "计算机科学与技术", plan: 95, tuition: 6300, admissionCount: 99, minScore: 587, minRank: 67027 },
  { order: 14, school: "浙大城市学院", feature: "杭州/应用型", risk: "稳", probability: "70%", major: "人工智能", plan: 14, tuition: 5500, admissionCount: 14, minScore: 587, minRank: 67409 },
  { order: 15, school: "温州大学", feature: "省重点", risk: "稳", probability: "71%", major: "信息与计算科学", plan: 27, tuition: 4800, admissionCount: 27, minScore: 586, minRank: 67582 },
  { order: 16, school: "温州大学", feature: "省重点", risk: "稳", probability: "73%", major: "数据科学与大数据技术", plan: 52, tuition: 5500, admissionCount: 60, minScore: 586, minRank: 68037 },
  { order: 17, school: "浙大城市学院", feature: "杭州/应用型", risk: "稳", probability: "76%", major: "自动化", plan: 65, tuition: 5500, admissionCount: 49, minScore: 585, minRank: 68887 },
  { order: 20, school: "浙江传媒学院", feature: "传媒特色", risk: "稳", probability: "82%", major: "数字媒体技术", plan: 33, tuition: 5500, admissionCount: 33, minScore: 582, minRank: 73367 },
  { order: 21, school: "浙江科技大学", feature: "应用型工科", risk: "保", probability: "87%", major: "电气工程及其自动化", plan: 145, tuition: 6300, admissionCount: 104, minScore: 583, minRank: 71998 },
  { order: 22, school: "浙大城市学院", feature: "杭州/应用型", risk: "保", probability: "88%", major: "软件工程", plan: 95, tuition: 6300, admissionCount: 64, minScore: 582, minRank: 72444 },
  { order: 25, school: "常州大学", feature: "外省/省重点", risk: "稳", probability: "42%", major: "人工智能(西太湖校区)", plan: 1, tuition: 5800, admissionCount: "", minScore: 581, minRank: 74117 },
  { order: 27, school: "浙江师范大学", feature: "省重点/保研", risk: "保", probability: "96%", major: "环境科学与工程", plan: 30, tuition: 6000, admissionCount: 40, minScore: 579, minRank: 76210 },
  { order: 34, school: "浙江科技大学", feature: "应用型工科", risk: "保", probability: "99%", major: "软件工程(安吉校区)", plan: 113, tuition: 5500, admissionCount: 108, minScore: 576, minRank: 80507 },
  { order: 43, school: "嘉兴大学", feature: "普通公办", risk: "保", probability: ">99%", major: "计算机科学与技术(梁林校区)", plan: 50, tuition: 6325, admissionCount: 62, minScore: 572, minRank: 84809 },
];

const schoolProfiles = [
  { match: /中国计量大学/, score: 86, level: "省重点/行业特色", chip: "行业特色", source: "学校层次：省重点/行业特色", text: "省重点，计量、质量、仪器、信息工程认可度较好；非双一流。" },
  { match: /浙江财经大学/, score: 85, level: "省重点/财经特色/保研", chip: "财经口碑", source: "学校层次：省重点/财经特色/保研", text: "省重点，有保研资格，省内财经口碑强；非双一流。" },
  { match: /浙江师范大学/, score: 84, level: "省重点/保研", chip: "省属高层次", source: "学校层次：省重点/保研", text: "省重点、有保研资格，省属综合层次较高；师范与基础学科更强。" },
  { match: /温州大学/, score: 78, level: "省重点建设", chip: "省内认可", source: "学校层次：省重点建设", text: "省重点建设高校，区域综合大学，省内认可度中上。" },
  { match: /浙江农林大学/, score: 77, level: "省重点/保研", chip: "杭州区位", source: "学校层次：省重点/保研", text: "省重点、有保研资格，杭州区位加分；信息类可选但不是学校最强底色。" },
  { match: /浙大城市学院/, score: 75, level: "杭州/应用型本科", chip: "杭州资源", source: "学校层次：杭州/应用型本科", text: "杭州区位和品牌有加分，应用型本科，城市资源较好。" },
  { match: /浙江科技大学/, score: 73, level: "应用型工科", chip: "工科应用", source: "学校层次：应用型工科", text: "应用型工科院校，省内工科就业导向明确，实践型专业有性价比。" },
  { match: /浙江传媒学院/, score: 71, level: "传媒特色", chip: "特色院校", source: "学校层次：传媒特色", text: "传媒特色明显，数字媒体和传媒技术有学校特色；纯工科平台不如工科院校。" },
  { match: /浙江海洋大学/, score: 68, level: "省内公办", chip: "公办保底", source: "学校层次：省内公办", text: "省内公办，区域和海洋特色明显，信息/电气可作就业型保底。" },
  { match: /嘉兴大学/, score: 64, level: "普通公办", chip: "公办保底", source: "学校层次：普通公办", text: "普通省内公办，区位尚可，适合作为保专业和保公办选择。" },
  { match: /常州大学/, score: 66, level: "外省省属高校", chip: "外省", source: "学校层次：外省省属高校", text: "外省省属高校，化工材料底色更强；小计划热门专业需谨慎。" },
];

const majorProfiles = [
  { match: /计算机科学与技术|软件工程/, employment: 92, postgrad: 82, civil: 88, category: "就业强", chips: ["就业强", "考公友好"], source: "岗位：Java/后端/测试/运维/政企信息化", jobs: "开发、测试、运维、数据开发、政企信息化", postgradText: "可冲更好平台或转AI/网安/软件方向", civilText: "计算机类岗位相对多" },
  { match: /电气工程|自动化/, employment: 88, postgrad: 80, civil: 62, category: "就业稳", chips: ["就业稳", "工科"], source: "岗位：电气工程师/自动化/新能源/设备调试", jobs: "电气工程师、自动化、新能源、设备调试", postgradText: "读研利于电网、设计院和国企", civilText: "考公岗位少于计算机/统计" },
  { match: /电子信息|通信工程/, employment: 84, postgrad: 82, civil: 65, category: "就业稳", chips: ["就业稳", "读研增值"], source: "岗位：嵌入式/硬件测试/通信/物联网", jobs: "嵌入式、硬件测试、通信、物联网", postgradText: "可转电子信息、通信、控制、集成电路", civilText: "技术岗有少量机会" },
  { match: /数据科学|大数据|应用统计/, employment: 82, postgrad: 88, civil: 80, category: "考研考公友好", chips: ["数据方向", "考公友好"], source: "岗位：数据分析/数仓/风控/统计调查", jobs: "数据分析、数仓、风控、金融科技", postgradText: "读研增值明显，可转统计/计算机/金融科技", civilText: "统计、税务、数字政务可看" },
  { match: /经济统计|统计学/, employment: 80, postgrad: 88, civil: 82, category: "考研考公友好", chips: ["统计方向", "考公友好"], source: "岗位：数据分析/统计调查/银行风控/税务财政", jobs: "数据分析、统计调查、银行风控、财政税务数据岗", postgradText: "读研可转统计、应用经济、金融工程、数据科学", civilText: "统计局、调查队、税务、财政岗位适配较好" },
  { match: /金融数学|金融工程|精算|金融科技/, employment: 76, postgrad: 90, civil: 72, category: "财经数学", chips: ["数学要求高", "读研增值"], source: "岗位：银行风控/量化助理/金融科技/数据分析", jobs: "银行风控、金融科技、数据分析、量化助理；高端岗位偏硕士", postgradText: "读研增值很明显，可转金融工程、统计、应用经济", civilText: "税务、金融监管、财政和部分经济类岗位可看" },
  { match: /金融学|投资学|保险学|信用管理/, employment: 70, postgrad: 78, civil: 76, category: "财经类", chips: ["财经类", "平台重要"], source: "岗位：银行/保险/证券/财富管理/风控运营", jobs: "银行、保险、证券、财富管理、风控运营；学校层次和实习影响较大", postgradText: "读研可提升金融机构和平台机会", civilText: "税务、财政、金融监管、银保监相关岗位可看" },
  { match: /财政学|税收学/, employment: 76, postgrad: 78, civil: 88, category: "考公友好", chips: ["考公友好", "财经类"], source: "岗位：税务/财政/会计/审计/企事业财务", jobs: "税务、财政、企事业财务、审计、预算管理", postgradText: "读研可转财政税务、会计审计、公共管理", civilText: "税务、财政系统匹配度高，是考公友好方向" },
  { match: /会计学|财务管理|审计学|资产评估/, employment: 78, postgrad: 72, civil: 82, category: "经管实用", chips: ["就业稳定", "考公友好"], source: "岗位：财务/审计/税务/会计/内控", jobs: "财务、审计、税务、会计、内控，岗位稳定但竞争人数多", postgradText: "考研或考证可提升平台，CPA/税务师等证书重要", civilText: "税务、审计、财政、事业单位财务岗匹配较好" },
  { match: /工商管理|市场营销|人力资源|旅游管理|酒店管理|电子商务|物流管理|供应链/, employment: 64, postgrad: 65, civil: 58, category: "经管泛化", chips: ["本科出口较泛", "看实习"], source: "岗位：运营/销售/人事/市场/供应链/电商", jobs: "运营、销售、人事、市场、供应链、电商；本科出口较泛，实习影响大", postgradText: "读研可转管理、应用经济、公共管理，但增值取决于学校", civilText: "考公岗位有但限制不如法学、中文、计算机、财会明确" },
  { match: /国际经济与贸易|贸易经济|商务英语/, employment: 66, postgrad: 68, civil: 55, category: "外贸商务", chips: ["看城市产业", "语言加分"], source: "岗位：外贸业务/跨境电商/商务运营/采购", jobs: "外贸业务、跨境电商、商务运营、采购；城市产业和英语能力很关键", postgradText: "可转国际商务、应用经济、翻译等方向", civilText: "海关、商务、税务等岗位可看，但数量有限" },
  { match: /法学|知识产权/, employment: 72, postgrad: 82, civil: 92, category: "考公强", chips: ["考公强", "法考关键"], source: "岗位：公务员/法务/律师助理/知识产权", jobs: "公务员、法务、律师助理、知识产权；法考通过率和学校平台很重要", postgradText: "读研和法考均能明显提升平台", civilText: "公检法、司法、行政执法、市场监管等岗位适配强" },
  { match: /汉语言文学|汉语国际教育|秘书学/, employment: 68, postgrad: 72, civil: 88, category: "考公友好", chips: ["考公友好", "文职适配"], source: "岗位：教师/文案/行政/新媒体/公务员", jobs: "教师、文案、行政、新媒体、出版编辑；岗位宽但薪资分化", postgradText: "可转中国语言文学、教育、新闻传播", civilText: "党政机关、宣传、综合管理、文秘岗位适配较好" },
  { match: /新闻学|传播学|网络与新媒体|广告学|编辑出版/, employment: 66, postgrad: 68, civil: 70, category: "内容传播", chips: ["作品集重要", "平台分化"], source: "岗位：新媒体运营/内容编辑/品牌传播/广告策划", jobs: "新媒体运营、内容编辑、品牌传播、广告策划；作品和实习很重要", postgradText: "读研可提升媒体、品牌和研究岗位平台", civilText: "宣传、网信、综合文字岗位可看" },
  { match: /英语|日语|法语|德语|西班牙语|翻译|外国语言文学/, employment: 62, postgrad: 68, civil: 62, category: "语言类", chips: ["语言能力关键", "需复合技能"], source: "岗位：外贸/翻译/教育/跨境电商/运营", jobs: "外贸、翻译、教育、跨境电商、运营；建议叠加法律、财经、计算机或外贸技能", postgradText: "读研可走翻译、语言文学、国际商务、教育", civilText: "外事、海关、商务、综合岗有机会但岗位有限" },
  { match: /历史学|哲学|社会学|政治学|民族学|马克思主义|思想政治教育/, employment: 56, postgrad: 76, civil: 78, category: "人文社科", chips: ["读研/考公更适合", "本科就业弱"], source: "岗位：教师/行政/党务/研究/公务员", jobs: "教师、行政、党务、研究、文职；本科市场化就业偏弱", postgradText: "读研价值较高，适合高校、研究、教育或考公路线", civilText: "党政机关、综合管理、党务宣传等岗位可看" },
  { match: /公共事业管理|行政管理|劳动与社会保障|土地资源管理|城市管理|公共管理/, employment: 60, postgrad: 70, civil: 82, category: "公共管理", chips: ["考公友好", "就业偏体制"], source: "岗位：行政/事业单位/社区治理/公共服务", jobs: "行政、事业单位、社区治理、公共服务；市场化就业一般", postgradText: "可转公共管理、社会保障、土地资源管理", civilText: "综合管理、民政、人社、自然资源等岗位适配较好" },
  { match: /心理学|应用心理学/, employment: 60, postgrad: 82, civil: 62, category: "读研增值", chips: ["读研增值", "证书重要"], source: "岗位：心理咨询助理/用户研究/人力/教育", jobs: "心理咨询助理、用户研究、人力资源、教育；本科直接就业门槛较尴尬", postgradText: "读研增值明显，专硕/学硕方向影响就业", civilText: "教育、司法、公安、事业单位有少量岗位" },
  { match: /教育学|小学教育|学前教育|特殊教育|科学教育/, employment: 68, postgrad: 74, civil: 76, category: "师范方向", chips: ["师范方向", "编制导向"], source: "岗位：教师/教研/教育机构/事业单位", jobs: "教师、教研、教育机构、教育产品；是否愿意当老师很关键", postgradText: "教育硕士和教师资格证提升稳定性", civilText: "教师编、事业单位和教育系统适配" },
  { match: /人工智能|智能科学/, employment: 74, postgrad: 92, civil: 58, category: "读研增值", chips: ["读研增值", "本科门槛高"], source: "岗位：算法/AI应用/数据/测试", jobs: "AI应用、数据、测试、开发，算法岗门槛高", postgradText: "强烈增值，硕士更适合算法/机器学习", civilText: "多按计算机类尝试，稳定性一般" },
  { match: /机器人工程/, employment: 78, postgrad: 82, civil: 45, category: "实践导向", chips: ["实践导向", "现场属性"], source: "岗位：PLC/机器人调试/机器视觉/系统集成", jobs: "PLC、机器人调试、机器视觉、系统集成", postgradText: "转控制/自动化/机器人方向提升上限", civilText: "考公岗位少" },
  { match: /机械设计|智能制造/, employment: 70, postgrad: 70, civil: 42, category: "现场属性", chips: ["制造业", "现场属性"], source: "岗位：机械设计/工艺/设备/非标自动化", jobs: "机械设计、工艺、设备、非标自动化", postgradText: "可转智能制造、机械电子、车辆/机器人", civilText: "岗位较少" },
  { match: /环境科学|环境工程|生物|食品|材料|化学/, employment: 56, postgrad: 78, civil: 72, category: "慎填", chips: ["慎填", "考研/考公更适合"], source: "岗位：环评/检测/EHS/生态环境考公", jobs: "环评、检测、环保工程、EHS", postgradText: "读研后进研究院/设计院/环保系统更好", civilText: "生态环境、自然资源等岗位匹配" },
  { match: /数字媒体技术/, employment: 76, postgrad: 68, civil: 55, category: "特色应用", chips: ["特色应用", "看作品集"], source: "岗位：前端/交互/三维/传媒大数据", jobs: "前端、交互、三维、传媒大数据、数字产品", postgradText: "可转计算机、数字媒体、交互设计", civilText: "一般看是否按计算机类认可" },
  { match: /信息与计算科学|数学|金融数学/, employment: 68, postgrad: 86, civil: 66, category: "考研增值", chips: ["数学要求高", "考研增值"], source: "方向：数学+计算机/统计/金融数学", jobs: "需补编程，可走数据分析、开发或算法助理", postgradText: "适合转计算机、统计、金融数学", civilText: "数学/统计/部分信息化岗位可看" },
  { match: /师范|科学教育/, employment: 66, postgrad: 72, civil: 70, category: "师范方向", chips: ["师范方向"], source: "方向：教师编制/教育系统", jobs: "教师、教培、教育科技、教育系统", postgradText: "教育硕士或学科教学提升就业稳定性", civilText: "教师编、事业单位适配" },
  { match: /医学|护理|药学|中医/, employment: 68, postgrad: 78, civil: 68, category: "医学药学", chips: ["职业路径明确"], source: "方向：医疗卫生/药企/事业单位", jobs: "医疗卫生、药企、检验、医药代表", postgradText: "深造价值较高", civilText: "卫健系统和事业单位可看" },
  { match: /临床医学|口腔医学|麻醉学|医学影像|医学检验|预防医学/, employment: 78, postgrad: 88, civil: 72, category: "医学类", chips: ["周期长", "职业明确"], source: "岗位：医院/卫健系统/医学检验/公共卫生", jobs: "医院、卫健系统、医学检验、公共卫生；培养周期长，读研规培常见", postgradText: "深造和规培对职业平台影响很大", civilText: "卫健系统、疾控、事业单位可看" },
  { match: /建筑学|城乡规划|风景园林/, employment: 62, postgrad: 70, civil: 58, category: "设计规划", chips: ["行业周期", "作品/资质重要"], source: "岗位：建筑设计/规划设计/景观设计/地产设计", jobs: "建筑设计、规划设计、景观设计、地产设计；受行业周期影响", postgradText: "读研和作品集能提升设计院平台", civilText: "住建、自然资源、规划类岗位有限" },
  { match: /土木工程|工程管理|工程造价|交通工程|给排水/, employment: 60, postgrad: 68, civil: 60, category: "传统工科", chips: ["行业周期", "现场属性"], source: "岗位：施工/造价/设计/项目管理", jobs: "施工、造价、设计、项目管理；现场属性强，行业周期影响大", postgradText: "读研可转结构、交通、市政、管理科学", civilText: "住建、交通、水利等岗位可看" },
  { match: /农学|园艺|植物保护|林学|动物科学|动物医学|水产|海洋科学/, employment: 58, postgrad: 72, civil: 68, category: "农林海洋", chips: ["冷门方向", "考研/体制更适合"], source: "岗位：农业技术/检测/科研助理/基层农林系统", jobs: "农业技术、检测、科研助理、基层农林系统；市场化岗位偏窄", postgradText: "读研后科研院所、事业单位机会更好", civilText: "农业农村、自然资源、海洋渔业等岗位可看" },
];

const headerAliases = {
  order: ["序号", "原序号"],
  school: ["院校", "学校", "院校名称", "学校名称"],
  feature: ["院校特色", "学校特色"],
  risk: ["风险标签", "风险"],
  probability: ["专业录取概率", "录取概率"],
  major: ["专业", "专业名称"],
  plan: ["计划", "招生计划", "计划数"],
  tuition: ["学费"],
  admissionCount: ["录取人数", "人数"],
  minScore: ["最低分", "分数线"],
  minRank: ["最低位次", "位次"],
};

let currentRows = [...sampleRows];
let analyzedRows = [];
let workbookCache = null;
let sheetAnalyses = [];

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
  if (row.reference?.score) return row.reference.score;
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

function normalizeKey(value) {
  return String(value ?? "")
    .replace(/\s+/g, "")
    .replaceAll("（", "(")
    .replaceAll("）", ")")
    .replace(/\(.*?\)/g, "")
    .trim();
}

function getRankReference(row) {
  const ref = window.RANK_REFERENCE || {};
  const key = `${normalizeKey(row.school)}|${normalizeKey(row.major)}`;
  const item = ref[key];
  if (!item) return null;
  return item;
}

function getAdmissionReference(row, rank) {
  const item = getRankReference(row);
  const years = [];
  if (item?.y2024?.rank) years.push({ year: 2024, ...item.y2024 });
  if (item?.y2025?.rank) years.push({ year: 2025, ...item.y2025 });
  if (!years.length) {
    const fallbackRank = Number(row.minRank) || 0;
    const fallbackScore = Number(row.minScore) || 0;
    return {
      years: fallbackRank ? [{ year: 2025, rank: fallbackRank, score: fallbackScore, plan: Number(row.plan) || 0 }] : [],
      score: admissionScoreFromRanks([{ rank: fallbackRank, plan: Number(row.plan) || 0 }], rank),
      level: admissionLevel([{ rank: fallbackRank }], rank),
      trend: "仅表内数据",
      detail: fallbackRank ? `2025表内位次${fallbackRank}` : "缺少历史位次",
      source: "上传表格",
    };
  }
  const score = admissionScoreFromRanks(years, rank);
  const y2024 = years.find((year) => year.year === 2024);
  const y2025 = years.find((year) => year.year === 2025);
  let trend = "两年参考";
  if (y2024 && y2025) {
    const rankChange = y2025.rank - y2024.rank;
    if (rankChange < -2500) trend = "位次上升，竞争变强";
    else if (rankChange > 2500) trend = "位次下降，录取变宽";
    else trend = "两年较稳定";
  }
  return {
    years,
    score,
    level: admissionLevel(years, rank),
    trend,
    detail: formatReferenceYears(years, rank),
    source: "2024/2025浙江考试院投档线",
  };
}

function admissionLevel(years, rank) {
  const validYears = years.filter((year) => Number(year.rank));
  if (!validYears.length) return "待核";
  const avgDiff = validYears.reduce((sum, year) => sum + (year.rank - rank), 0) / validYears.length;
  if (avgDiff < -1200) return "冲";
  if (avgDiff <= 9000) return "稳";
  return "保";
}

function admissionScoreFromRanks(years, rank) {
  const validYears = years.filter((year) => Number(year.rank));
  if (!validYears.length) return 45;
  const diffs = validYears.map((year) => year.rank - rank);
  const avgDiff = diffs.reduce((sum, diff) => sum + diff, 0) / diffs.length;
  const worstDiff = Math.min(...diffs);
  let score = 50;
  if (avgDiff < -9000) score = 25;
  else if (avgDiff < -5000) score = 38;
  else if (avgDiff < -1200) score = 54;
  else if (avgDiff < 1500) score = 68;
  else if (avgDiff < 7000) score = 78;
  else if (avgDiff < 15000) score = 88;
  else score = 94;
  if (worstDiff < -5000) score -= 6;
  if (validYears.some((year) => Number(year.plan) > 0 && Number(year.plan) <= 2)) score -= 10;
  return clamp(score, 10, 98);
}

function formatReferenceYears(years, rank) {
  return years
    .map((year) => {
      const diff = year.rank - rank;
      const diffText = diff >= 0 ? `宽${diff}` : `高${Math.abs(diff)}`;
      return `${year.year}：${year.score}分/${year.rank}位（${diffText}位）`;
    })
    .join("；");
}

function riskPenalty(row, prefs, majorProfile) {
  let penalty = 0;
  const subjects = document.querySelector("#subjectInput").value || "";
  const school = row.school || "";
  const major = row.major || "";
  const isOutsideZhejiang = !/浙江|温州|嘉兴|杭州|浙大|中国计量/.test(school);

  if ((Number(row.plan) || 0) <= 2) penalty += 12;
  if (prefs.includes("outsideSchool") && isOutsideZhejiang) penalty += 10;
  if (prefs.includes("outsideSmallPlan") && isOutsideZhejiang && (Number(row.plan) || 0) <= 2) penalty += 12;
  if (prefs.includes("highTuition") && (/中外|合作|高收费/.test(major) || Number(row.tuition) >= 15000)) penalty += 18;
  if (prefs.includes("fieldwork") && /机械|机器人|智能制造|自动化/.test(major)) penalty += 8;
  if (prefs.includes("researchDependent") && /人工智能|智能科学|信息与计算|数学|环境|金融数学/.test(major)) penalty += 10;
  if (prefs.includes("unclearEmployment") && /人工智能|智能科学|金融数学|数字经济|管理科学|工商管理|市场营销|公共事业管理|行政管理|哲学|历史学|社会学|心理学/.test(major)) penalty += 8;
  if (prefs.includes("environment") && /环境|生物|食品|材料|化学/.test(major)) penalty += 18;
  if (prefs.includes("coldTraditional") && /农学|林学|海洋|水产|地质|矿业|纺织/.test(major)) penalty += 12;
  if (prefs.includes("teacher") && /师范|科学教育/.test(major)) penalty += 12;
  if (prefs.includes("medical") && /医学|护理|药学|中医/.test(major)) penalty += 12;
  if (prefs.includes("mathHeavy") && /统计|数据科学|人工智能|数学|金融数学|金融工程|精算|信息与计算/.test(major)) penalty += 8;
  if (prefs.includes("csCompetition") && /计算机|软件|人工智能/.test(major)) penalty += 5;
  if (majorProfile.category === "慎填") penalty += 8;
  if (needsPhysicsChemistry(major) && (!subjects.includes("物") || !subjects.includes("化"))) penalty += 28;
  return penalty;
}

function needsPhysicsChemistry(major) {
  return /计算机|软件|数据科学|大数据|人工智能|智能科学|电气|自动化|电子信息|通信|机器人工程|机械|智能制造|数字媒体技术/.test(major);
}

function subjectResult(major) {
  const subjects = document.querySelector("#subjectInput").value || "";
  if (!needsPhysicsChemistry(major)) {
    return { text: `${subjects}；仍需核对招生计划书`, tone: "warn" };
  }
  if (subjects.includes("物") && subjects.includes("化")) {
    return { text: `${subjects}；硬工科通常适配`, tone: "good" };
  }
  return { text: `${subjects}；可能不满足物化要求，需重点核对`, tone: "danger" };
}

function analyzeRow(row) {
  const rank = Number(document.querySelector("#rankInput").value) || 62895;
  const goal = document.querySelector("#goalInput").value;
  const prefs = getRejectedPrefs();
  const schoolProfile = getProfile(schoolProfiles, row.school, {
    score: 62,
    level: "待核",
    chip: "学校待核",
    source: "学校层次：待核",
    text: "学校层次需进一步核对，先按普通本科处理。",
  });
  const majorProfile = getProfile(majorProfiles, row.major, {
    employment: 60,
    postgrad: 62,
    civil: 58,
    category: "通用专业",
    chips: ["需人工核对"],
    source: "专业来源：待核",
    jobs: "当前规则库未完全覆盖该专业，需结合课程、学校介绍和招聘岗位核对",
    postgradText: "需核对可衔接的硕士方向和学校培养口径",
    civilText: "需核对国考/省考职位表专业目录",
  });
  const reference = getAdmissionReference(row, rank);
  const admission = reference.score;
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
  const subject = subjectResult(row.major);
  const sortScore = placementScore({ row, reference, admission, schoolProfile, majorProfile, preference, penalty });
  const chips = [
    { text: schoolProfile.chip, tone: "source" },
    ...majorProfile.chips.map((text) => ({ text, tone: chipTone(text) })),
    { text: `建议分 ${finalScore}`, tone: tag === "慎填" ? "danger" : tag === "后移" ? "warn" : "good" },
    { text: tag, tone: tag === "慎填" ? "danger" : tag === "后移" ? "warn" : "good" },
  ];
  if ((Number(row.plan) || 0) <= 2) chips.push({ text: "小计划风险", tone: "danger" });
  if (penalty > 0) chips.push({ text: `风险扣分 ${penalty}`, tone: penalty >= 18 ? "danger" : "warn" });

  return {
    ...row,
    reference,
    score: finalScore,
    sortScore,
    tag,
    penalty,
    chips,
    analysisParts: {
      school: `${schoolProfile.level}；${schoolProfile.text}`,
      admission: `${reference.detail}；${reference.trend}`,
      jobs: majorProfile.jobs,
      postgrad: majorProfile.postgradText,
      civil: majorProfile.civilText,
      subject: subject.text,
      subjectTone: subject.tone,
      advice: `${finalScore}分，${tag}`,
    },
    analysis: `${schoolProfile.text} 录取：${reference.detail}，${reference.trend}。就业：${majorProfile.jobs}。考研：${majorProfile.postgradText}。考公：${majorProfile.civilText}。选科：${subject.text}。建议：${finalScore}分，${tag}。`,
    sources: `${reference.source}；招生计划书选考要求；${schoolProfile.source}；${majorProfile.source}；国考/省考职位表；Boss岗位关键词。`,
  };
}

function placementScore({ row, reference, admission, schoolProfile, majorProfile, preference, penalty }) {
  let score =
    schoolProfile.score * 0.42 +
    majorProfile.employment * 0.28 +
    majorProfile.postgrad * 0.1 +
    majorProfile.civil * 0.08 +
    preference * 0.07 +
    admission * 0.05 -
    penalty;

  const risk = String(row.risk || "");
  const admissionRisk = reference?.level || risk;
  if (schoolProfile.score <= 68 && admissionRisk.includes("保")) score -= 12;
  if (schoolProfile.score <= 65 && admissionRisk.includes("保")) score -= 6;
  if (schoolProfile.score <= 68 && /机械|机器人|环境|土木|管理|市场营销/.test(row.major || "")) score -= 8;
  if ((Number(row.plan) || 0) <= 2) score -= 10;

  return Math.round(clamp(score, 20, 98));
}

function chipTone(text) {
  if (/强|友好|稳|增值|特色|数据/.test(text)) return "good";
  if (/慎填|门槛|现场|要求高|待核/.test(text)) return "warn";
  return "";
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
    const aValue = (a.sortScore ?? a.score) + tagBoost[a.tag];
    const bValue = (b.sortScore ?? b.score) + tagBoost[b.tag];
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
          <td class="admission-cell">${renderAdmission(row)}</td>
          <td class="analysis-cell">${renderAnalysis(row)}</td>
          <td class="source-cell">${renderSources(row.sources)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderAnalysis(row) {
  const part = row.analysisParts;
  return `
    <div class="analysis-stack">
      <div class="chip-row">${row.chips.map((chip) => `<span class="chip ${chip.tone}">${escapeText(chip.text)}</span>`).join("")}</div>
      ${analysisLine("学校", part.school)}
      ${analysisLine("就业", part.jobs)}
      ${analysisLine("考研", part.postgrad)}
      ${analysisLine("考公", part.civil)}
      ${analysisLine("选科", part.subject, part.subjectTone)}
      ${analysisLine("建议", part.advice)}
    </div>
  `;
}

function renderAdmission(row) {
  const reference = row.reference;
  if (!reference?.years?.length) {
    return `<div class="admission-stack"><span class="chip warn">缺少历史数据</span><small>需人工核对招生计划</small></div>`;
  }
  return `
    <div class="admission-stack">
      <span class="tag-pill ${tagClass(reference.level)}">${escapeText(reference.level)}</span>
      <span class="chip source">${escapeText(reference.trend)}</span>
      ${reference.years.map((year) => `<div><strong>${year.year}</strong> ${year.score}分 / ${year.rank}位</div>`).join("")}
    </div>
  `;
}

function analysisLine(label, value, tone = "") {
  return `<div class="analysis-line"><strong>${label}</strong><span class="${tone ? `text-${tone}` : ""}">${escapeText(value)}</span></div>`;
}

function renderSources(sourceText) {
  return `
    <div class="chip-row">
      ${sourceText.split("；").filter(Boolean).map((text) => `<span class="chip source">${escapeText(text)}</span>`).join("")}
    </div>
  `;
}

function renderAdjusted(rows) {
  const adjusted = sortForZhejiang(rows);
  document.querySelector("#adjustedBody").innerHTML = adjusted
    .map((row, index) => {
      const changed = Number(row.order) !== index + 1;
      const reasons = [
        `建议分 ${row.score}`,
        `排序分 ${row.sortScore}`,
        `录取${row.reference?.level || row.risk || "待核"}`,
        `标签 ${row.tag}`,
        row.analysisParts.jobs,
        row.penalty ? `风险扣分 ${row.penalty}` : "无明显偏好扣分",
      ];
      return `
        <tr class="${changed ? "highlight-row" : ""}">
          <td>${index + 1}</td>
          <td>${escapeText(row.order)}</td>
          <td>${escapeText(row.school)}</td>
          <td>${escapeText(row.major)}</td>
          <td><span class="score-pill">${row.score}</span></td>
          <td><span class="tag-pill ${tagClass(row.tag)}">${row.tag}</span></td>
          <td class="analysis-cell">
            <div class="analysis-stack">
              <div class="chip-row">${reasons.map((reason) => `<span class="chip ${row.tag === "慎填" ? "danger" : ""}">${escapeText(reason)}</span>`).join("")}</div>
              ${analysisLine("调整", changed ? `原序号 ${row.order} 调整到 ${index + 1}` : "原位置基本合理")}
              ${analysisLine("原因", "按浙江专业平行志愿规则，优先放更愿意被录取且综合价值更高的院校专业。")}
            </div>
          </td>
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

function normalizeRow(raw, index, fieldMap) {
  const get = (field) => {
    const header = fieldMap[field];
    return header ? raw[header] : "";
  };
  return {
    order: toNumber(get("order")) || index + 1,
    school: String(get("school") || "").trim(),
    feature: String(get("feature") || "").trim(),
    risk: String(get("risk") || "").trim(),
    probability: String(get("probability") || "").trim(),
    major: String(get("major") || "").trim(),
    plan: toNumber(get("plan")) || "",
    tuition: toNumber(get("tuition")) || "",
    admissionCount: toNumber(get("admissionCount")) || "",
    minScore: toNumber(get("minScore")) || "",
    minRank: toNumber(get("minRank")) || "",
  };
}

function analyzeSheet(sheet, sheetName) {
  const matrix = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  let best = null;
  const maxScan = Math.min(matrix.length, 12);
  for (let rowIndex = 0; rowIndex < maxScan; rowIndex++) {
    const headerRow = matrix[rowIndex].map((cell) => cleanHeader(cell));
    const fieldMap = buildFieldMap(headerRow);
    const score = fieldScore(fieldMap);
    if (!best || score > best.score) best = { rowIndex, fieldMap, score };
  }
  if (!best || !best.fieldMap.school || !best.fieldMap.major) {
    return { sheetName, rows: [], error: "没有找到“院校”和“专业”表头" };
  }
  const rows = matrix
    .slice(best.rowIndex + 1)
    .map((row) => {
      const raw = {};
      matrix[best.rowIndex].forEach((header, colIndex) => {
        raw[cleanHeader(header)] = row[colIndex];
      });
      return raw;
    })
    .map((raw, index) => normalizeRow(raw, index, best.fieldMap))
    .filter((row) => row.school && row.major && !Number.isNaN(Number(row.order)));
  return {
    sheetName,
    rows,
    headerRow: best.rowIndex,
    fieldMap: best.fieldMap,
    score: best.score + rows.length,
    error: rows.length ? "" : "找到了表头，但没有识别到有效志愿行",
  };
}

function buildFieldMap(headers) {
  const fieldMap = {};
  Object.entries(headerAliases).forEach(([field, aliases]) => {
    const found = headers.find((header) => aliases.some((alias) => header === alias || header.includes(alias)));
    if (found) fieldMap[field] = found;
  });
  return fieldMap;
}

function fieldScore(fieldMap) {
  let score = 0;
  ["school", "major"].forEach((field) => { if (fieldMap[field]) score += 10; });
  ["order", "plan", "minScore", "minRank", "risk", "probability"].forEach((field) => { if (fieldMap[field]) score += 2; });
  return score;
}

function cleanHeader(value) {
  return String(value ?? "").replace(/\s+/g, "").trim();
}

function handleFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  setUploadStatus("正在解析文件...", "");
  document.querySelector("#fileLabel").textContent = file.name;
  if (!window.XLSX) {
    setUploadStatus("Excel 解析库没有加载成功。请刷新页面后重试。", "error");
    return;
  }
  const reader = new FileReader();
  reader.onerror = () => setUploadStatus("文件读取失败。请尝试把文件另存为 .xlsx 后重新上传。", "error");
  reader.onload = (loadEvent) => {
    try {
      workbookCache = XLSX.read(loadEvent.target.result, { type: "array" });
      sheetAnalyses = workbookCache.SheetNames.map((name) => analyzeSheet(workbookCache.Sheets[name], name));
      renderSheetPicker();
      const best = [...sheetAnalyses].sort((a, b) => (b.score || 0) - (a.score || 0))[0];
      if (!best || !best.rows.length) {
        const errors = sheetAnalyses.map((item) => `${item.sheetName}: ${item.error}`).join("；");
        setUploadStatus(`解析失败：${errors || "没有识别到有效志愿表"}。建议检查表头是否包含“院校”和“专业”，或另存为标准 .xlsx。`, "error");
        return;
      }
      applySheetAnalysis(best.sheetName);
    } catch (error) {
      setUploadStatus(`解析失败：${error.message || "文件格式异常"}。建议另存为 .xlsx 后重试。`, "error");
    }
  };
  reader.readAsArrayBuffer(file);
}

function renderSheetPicker() {
  const wrap = document.querySelector("#sheetPickerWrap");
  const picker = document.querySelector("#sheetPicker");
  picker.innerHTML = sheetAnalyses
    .map((item) => `<option value="${escapeAttr(item.sheetName)}">${escapeText(item.sheetName)}${item.rows.length ? `（${item.rows.length}条）` : "（未识别）"}</option>`)
    .join("");
  wrap.classList.toggle("hidden", sheetAnalyses.length <= 1);
}

function applySheetAnalysis(sheetName) {
  const selected = sheetAnalyses.find((item) => item.sheetName === sheetName);
  if (!selected || !selected.rows.length) {
    setUploadStatus(`这个工作表无法识别：${selected?.error || "缺少院校和专业列"}`, "error");
    return;
  }
  currentRows = selected.rows;
  document.querySelector("#sheetPicker").value = sheetName;
  setUploadStatus(`读取成功：工作表“${sheetName}”，识别 ${selected.rows.length} 条志愿。`, "success");
  runAnalysis();
}

function clearUploadedFile() {
  document.querySelector("#fileInput").value = "";
  document.querySelector("#fileLabel").textContent = "选择 Excel 文件";
  document.querySelector("#sheetPicker").innerHTML = "";
  document.querySelector("#sheetPickerWrap").classList.add("hidden");
  workbookCache = null;
  sheetAnalyses = [];
  currentRows = [...sampleRows];
  setUploadStatus("已删除上传文件，当前恢复为示例数据。", "");
  runAnalysis();
}

function setUploadStatus(message, type) {
  const status = document.querySelector("#uploadStatus");
  status.textContent = message;
  status.classList.remove("success", "error");
  if (type) status.classList.add(type);
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
    "录取参考": row.analysisParts.admission,
    综合建议分: row.score,
    调整标签: row.tag,
    学校层次: row.analysisParts.school,
    就业: row.analysisParts.jobs,
    考研: row.analysisParts.postgrad,
    考公: row.analysisParts.civil,
    选科: row.analysisParts.subject,
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
  if (tag === "冲") return "caution";
  if (tag === "稳") return "forward";
  if (tag === "保") return "";
  if (tag === "前移") return "forward";
  if (tag === "后移") return "backward";
  if (tag === "慎填") return "caution";
  return "";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function toNumber(value) {
  if (value === "--" || value === "") return "";
  const text = String(value ?? "").replace(/[^\d.]/g, "");
  return text ? Number(text) : "";
}

function escapeText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeText(value).replaceAll("`", "&#096;");
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
document.querySelector("#clearFileButton").addEventListener("click", clearUploadedFile);
document.querySelector("#sheetPicker").addEventListener("change", (event) => applySheetAnalysis(event.target.value));
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
