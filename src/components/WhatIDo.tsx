import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>MACHINE LEARNING</h3>
              <h4>Intelligent Model Engineering</h4>
              <p>
                Building end-to-end ML pipelines for classification, clustering,
                forecasting, and computer vision. From data prep to production
                deployment on Databricks and AWS SageMaker.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Scikit-learn</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">YOLO v8</div>
                <div className="what-tags">LSTM</div>
                <div className="what-tags">ARIMA/SARIMA</div>
                <div className="what-tags">MLflow</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>GENERATIVE AI & NLP</h3>
              <h4>LLM-Powered Solutions</h4>
              <p>
                Designing RAG pipelines, fine-tuning LLMs with SFT/DPO/ORPO,
                and building multi-tenant AI platforms with FastAPI and Azure
                OpenAI for real-world enterprise use cases.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Mistral-7B</div>
                <div className="what-tags">LLaMA</div>
                <div className="what-tags">GPT Family</div>
                <div className="what-tags">Hugging Face</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">LlamaIndex</div>
                <div className="what-tags">Qdrant</div>
                <div className="what-tags">FastAPI</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA ENGINEERING & CLOUD</h3>
              <h4>Scalable Data Infrastructure</h4>
              <p>
                Building scalable data pipelines using AWS services and
                Databricks. Deploying ML models with MLflow, automating
                workflows with Lambda and Kinesis for production-grade systems.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AWS SageMaker</div>
                <div className="what-tags">S3 / EC2</div>
                <div className="what-tags">Textract</div>
                <div className="what-tags">Databricks</div>
                <div className="what-tags">MLflow</div>
                <div className="what-tags">Azure Cosmos DB</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">SQL</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
