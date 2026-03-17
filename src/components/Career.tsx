import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Aggregate Intelligence</h5>
                <h6>Nov 2020 – Aug 2021 · 10 mos</h6>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Implemented ML models to optimize business intelligence pipelines.
              Converted graph-based visualizations into interactive map dashboards
              for improved data interpretability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Indium Software</h5>
                <h6>Aug 2021 – Dec 2022 · 1 yr 5 mos</h6>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built Time Series Forecasting models (ARIMA, LSTM, Prophet) for
              footwear industry achieving 93% accuracy. Developed Power BI
              dashboards, OCR pipelines using Pytesseract & TrOCR, and automated
              document digitization with PyMuPDF & Ghostscript.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Data Scientist</h4>
                <h5>Indium Software</h5>
                <h6>Dec 2022 – Jul 2025 · 2 yrs 8 mos</h6>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Fine-tuned LLMs (LoRA, SFT, DPO, ORPO) for GenAI test case generation
              in C/ADA. Built NL-to-SQL system with Mistral-7B & SQLCoder. Developed
              RAG-based PDF extraction with InternVL2 & Meta-LLaMA-3. Implemented
              YOLOv8 solar panel defect detection deployed via Databricks + AWS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>Indium Software</h5>
                <h6>Jul 2025 – Present · 9 mos</h6>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Passport Intelligence — a multi-tenant FastAPI + Azure OpenAI
              + Cosmos DB SaaS platform for casino operations. Leading Airbus GenAI
              for automated avionics test case generation. Fine-tuning LLMs with SFT,
              DPO & ORPO techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
