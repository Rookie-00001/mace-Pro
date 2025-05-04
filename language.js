const languageData = {
    zh: {
        // 公共部分
        title: "MACE风险预测模型系统",
        subtitle: "基于多参数的综合MACE风险评估工具",
        allModels: "全部模型",
        basicModel: "基础模型",
        otherModels: "其他模型",
        btnUseModel: "使用模型",
        footerText1: "MACE风险预测系统 © 2025",
        footerText2: "仅供医疗专业人员使用",
        toggleLogic: "显示计算逻辑",
        closeLogic: "关闭说明",
        totalScore: "总分数",
        linearPrediction: "线性预测值",
        riskProbability: "风险概率",
        inputPlaceholder: "请输入",
        calcVolume: "钙化成分体积",
        stenosisDegree: "狭窄程度",
        faiValue: "责任血管FAI",
        bloodSugar: "血糖",
        imagingScore: "影像组学分数",
        tooltipCalcVolume: "范围：0-700",
        tooltipStenosisDegree: "范围：0.0-1.0",
        tooltipFaiValue: "范围：-115至-60",
        tooltipBloodSugar: "范围：2-18",
        tooltipImagingScore: "范围：-0.4至1.0",
        calcLogicTitle: "计算逻辑说明",
        variableScoreCalc: "1. 变量得分计算",
        linearPredictionFormula: "2. 预测值计算",
        riskProbabilityFormula: "3. 风险概率计算",
        modelCoefficients: "模型系数",
        lpFormula: "线性预测值公式：",
        riskFormula: "风险 = 1 / (1 + e<sup>-LP</sup>) × 100%",
        backToHome: "返回首页",
        
        // 模型特定文本
        basicModelTitle: "基础预测模型",
        basicModelDesc: "基于钙化体积、狭窄程度和FAI指标的基础风险评估模型",
        bloodSugarModelTitle: "血糖预测模型",
        bloodSugarModelDesc: "在基础模型上增加血糖指标，提升实际性的风险评估精度",
        omicsModelTitle: "组学预测模型",
        omicsModelDesc: "整合影像组学特征的联合预测模型，提供更精准的风险评估",
        
        // 计算逻辑示例文本
        logicExample1: "示例：钙化体积=200 → 查表得26分",
        logicExample2: "示例：血糖=10 → 查表得12分",
        logicExample3: "示例：影像组学分数=0.5 → 查表得64分",
        
        // 模型页面标题
        basicPageTitle: "基础预测模型",
        bloodSugarPageTitle: "血糖预测模型",
        omicsPageTitle: "组学预测模型",
        
        // 得分文本
        calcVolScore: "钙化成分体积得分",
        stenosisScore: "狭窄程度得分",
        faiScore: "责任血管FAI得分",
        bloodSugarScore: "血糖得分",
        imagingScore: "影像组学分数得分",
        
        // 错误提示
        invalidInput: "请输入患者全部信息",
        points: "分",
        dataWord: "数据",
        
        // 导航文本
        navBasic: "基础模型",
        navBloodSugar: "血糖模型",
        navOmics: "组学模型",
        navHome: "首页",
        
        // 计算逻辑内容
        linearInterpolation: "基于预设列线图进行线性插值",
        logicFunction: "逻辑函数转换：",
        parameter: "参数",
        value: "值",
        intercept: "截距",
        
        // 公式翻译
        basicFormula: "LP = 5.2411 + (钙化体积×0.006667) + (狭窄程度×2.4757) + (FAI×0.091687)",
        glucoseFormula: "LP = 4.8055 + (钙化体积×0.0068) + (狭窄程度×2.4338) + (FAI×0.0918) + (血糖×0.0781)",
        omicsFormula: "LP = 2.4867 + (狭窄程度×2.3986) + (钙化体积×0.00267) + (FAI×0.0871) + (影像组学分数×7.3465)"
    },
    en: {
        // Common parts
        title: "MACE Risk Prediction System",
        subtitle: "Comprehensive MACE risk assessment tool based on multiple parameters",
        allModels: "All Models",
        basicModel: "Basic Model",
        otherModels: "Advanced Models",
        btnUseModel: "Use Model",
        footerText1: "MACE Risk Prediction System © 2025",
        footerText2: "For medical professionals only",
        toggleLogic: "Show Calculation Logic",
        closeLogic: "Close Explanation",
        totalScore: "Total Score",
        linearPrediction: "Linear Prediction",
        riskProbability: "Risk Probability",
        inputPlaceholder: "Please enter ",
        calcVolume: "Calcified Volume",
        stenosisDegree: "Stenosis Degree",
        faiValue: "Vessel FAI",
        bloodSugar: "Blood Glucose",
        imagingScore: "Radiomics Score",
        tooltipCalcVolume: "Range: 0-700",
        tooltipStenosisDegree: "Range: 0.0-1.0",
        tooltipFaiValue: "Range: -115 to -60",
        tooltipBloodSugar: "Range: 2-18",
        tooltipImagingScore: "Range: -0.4 to 1.0",
        calcLogicTitle: "Calculation Logic",
        variableScoreCalc: "1. Variable Score Calculation",
        linearPredictionFormula: "2. Prediction Value Calculation",
        riskProbabilityFormula: "3. Risk Probability Calculation",
        modelCoefficients: "Model Coefficients",
        lpFormula: "Linear Prediction Formula:",
        riskFormula: "Risk = 1 / (1 + e<sup>-LP</sup>) × 100%",
        backToHome: "Back to Home",

        // Model-specific text
        basicModelTitle: "Basic Prediction Model",
        basicModelDesc: "A basic risk assessment model based on calcification volume, degree of stenosis, and FAI index",
        bloodSugarModelTitle: "Blood Glucose Model",
        bloodSugarModelDesc: "A risk assessment model that incorporates blood glucose levels to improve practical accuracy",
        omicsModelTitle: "Omics Prediction Model",
        omicsModelDesc: "An integrated prediction model combining radiomics features for more precise risk assessment",
        
        // Logic example text
        logicExample1: "Example: Calcification volume=200 → 26 points from table",
        logicExample2: "Example: Blood glucose=10 → 12 points from table",
        logicExample3: "Example: Radiomics score=0.5 → 64 points from table",
        
        // Model page titles
        basicPageTitle: "Basic Prediction Model",
        bloodSugarPageTitle: "Blood Glucose Model",
        omicsPageTitle: "Omics Prediction Model",
        
        // Score text
        calcVolScore: "Calcified Volume Score",
        stenosisScore: "Stenosis Score",
        faiScore: "Vessel FAI Score",
        bloodSugarScore: "Blood Glucose Score",
        imagingScore: "Radiomics Score",
        
        // Error messages
        invalidInput: "Please enter all patient information",
        points: "points",
        dataWord: "data",
        
        // Navigation text
        navBasic: "Basic",
        navBloodSugar: "Glucose",
        navOmics: "Omics",
        navHome: "Home",
        
        // Logic content
        linearInterpolation: "Based on preset nomogram with linear interpolation",
        logicFunction: "Logistic function conversion:",
        parameter: "Parameter",
        value: "Value",
        intercept: "Intercept",
        
        // Formula translations
        basicFormula: "LP = 5.2411 + (Calcified Volume×0.006667) + (Stenosis Degree×2.4757) + (Vessel FAI×0.091687)",
        glucoseFormula: "LP = 4.8055 + (Calcified Volume×0.0068) + (Stenosis Degree×2.4338) + (Vessel FAI×0.0918) + (Blood Glucose×0.0781)",
        omicsFormula: "LP = 2.4867 + (Stenosis Degree×2.3986) + (Calcified Volume×0.00267) + (Vessel FAI×0.0871) + (Radiomics Score×7.3465)"
    }
};

// 语言切换助手函数
function setLanguage(lang) {
    localStorage.setItem("language", lang);
    const elements = document.querySelectorAll("[data-lang-key]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-lang-key");
        if (languageData[lang][key]) {
            el.innerHTML = languageData[lang][key];
        }
    });
    
    // 处理placeholder
    document.querySelectorAll("input").forEach(input => {
        if (input.hasAttribute("data-field-key")) {
            const fieldKey = input.getAttribute("data-field-key");
            if (languageData[lang][fieldKey]) {
                input.placeholder = languageData[lang].inputPlaceholder + languageData[lang][fieldKey];
            }
        }
    });
    
    // 处理tooltip标题
    document.querySelectorAll("[data-bs-toggle='tooltip']").forEach(element => {
        if (element.hasAttribute("data-lang-title")) {
            const key = element.getAttribute("data-lang-title");
            if (languageData[lang][key]) {
                const tooltip = bootstrap.Tooltip.getInstance(element);
                if (tooltip) {
                    tooltip.dispose();
                }
                element.setAttribute("title", languageData[lang][key]);
                new bootstrap.Tooltip(element);
            }
        }
    });
    
    document.documentElement.lang = lang;
}

// 初始化语言
document.addEventListener("DOMContentLoaded", () => {
    const userLang = localStorage.getItem("language") || "zh";
    setLanguage(userLang);
});