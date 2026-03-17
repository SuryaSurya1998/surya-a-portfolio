import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Passport Intelligence",
    category: "Multi-Tenant LLM Platform — Casino Analytics",
    description:
      "Multi-tenant LLM platform for casino analytics, enabling real-time player segmentation, churn prediction, and personalized promotions using Azure OpenAI.",
    tools: ["Python", "FastAPI", "Azure OpenAI", "Cosmos DB", "Pandas", "Streamlit"],
    image: "/images/passport.png",
  },
  {
    title: "Airbus GenAI",
    category: "Automated Test Case Code Generation — Avionics",
    description:
      "Fine-tuned LLMs for automated test case code generation in C and Ada for avionics software validation with safety-critical constraints.",
    tools: ["Meta-Llama-3.1-8B", "LoRA", "SFT", "DPO", "ORPO", "Hugging Face"],
    image: "/images/airbus.png",
  },
  {
    title: "SQL Query Generation",
    category: "LLM-Powered NL-to-SQL System",
    description:
      "Natural language to SQL system leveraging fine-tuned LLMs to convert plain English queries into accurate SQL for business intelligence teams.",
    tools: ["Python", "Streamlit", "Mistral-7B", "SQLCoder-7B-2", "SQLite"],
    image: "/images/sql_gen.png",
  },
  {
    title: "Advanced Data Extraction",
    category: "Multi-Modal RAG Pipeline",
    description:
      "Multi-modal RAG pipeline for extracting structured data from complex documents using vision and language models with vector search retrieval.",
    tools: ["PyTorch", "InternVL2", "Qdrant", "LlamaIndex", "Meta-Llama-3-8B"],
    image: "/images/data_extract.png",
  },
  {
    title: "Solar Panel AI",
    category: "Defect Detection & Weather Forecasting",
    description:
      "AI system for solar panel defect detection using YOLO and weather-based power output forecasting with LSTM, deployed on Databricks with MLflow tracking.",
    tools: ["YOLO V8", "LSTM", "Databricks", "MLflow", "AWS S3", "OpenCV"],
    image: "/images/solar.png",
  },
  {
    title: "Thread Anomaly Detection",
    category: "Vision-Based Defect Detection — Manufacturing",
    description:
      "Real-time vision-based defect detection for manufacturing threads using AWS Lookout for Vision, with automated alerts and scalable stream processing.",
    tools: ["YOLO", "AWS Lookout", "SageMaker", "Kinesis", "Lambda", "SNS"],
    image: "/images/thread_anomaly.png",
  },
  {
    title: "Medical Report Extraction",
    category: "Intelligent Document Processing — Healthcare",
    description:
      "Intelligent document processing system extracting structured data from medical reports using vision transformers and OCR for downstream analytics.",
    tools: ["ViT", "Donut", "PaddleOCR", "Detectron2", "pdf2image"],
    image: "/images/medical_extract.png",
  },
  {
    title: "Footwear Price Forecasting",
    category: "Raw Material Price Prediction — Footwear Industry",
    description:
      "Time-series forecasting solution predicting raw material prices for the footwear industry using ARIMA, LSTM, and Prophet with PowerBI dashboards.",
    tools: ["ARIMA", "LSTM", "Prophet", "PowerBI", "Pandas"],
    image: "/images/footwear_forecast.png",
  },
  {
    title: "OCR Table Extraction",
    category: "Unstructured Table Recognition — Document AI",
    description:
      "Document AI pipeline for detecting and extracting tables from unstructured documents using layout detection and OCR, stored in a structured database.",
    tools: ["Flask", "Detectron2", "OpenCV", "TrOCR", "MySQL"],
    image: "/images/ocr_extract.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    {/* Left: Info */}
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools.join(", ")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Card */}
                    <div className="carousel-card">
                      <div className="carousel-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h5 className="carousel-card-title">{project.title}</h5>
                      <p className="carousel-card-desc">{project.description}</p>
                      <div className="carousel-card-tags">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="carousel-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
