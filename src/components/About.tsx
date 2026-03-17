import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Data Scientist with 4.6+ years at Indium Software, engineering
          production-grade ML and Generative AI systems. Expert in Python, SQL,
          and the full ML spectrum — regression, classification, clustering, LSTM,
          ARIMA/SARIMAX, and YOLO-based computer vision. Deep hands-on experience
          fine-tuning and deploying LLMs (Mistral-7B, Meta-LLaMA, SQLCoder, GPT,
          Phi) for RAG pipelines, NL-to-SQL generation, and document intelligence.
          Built multi-tenant SaaS backends using FastAPI + Azure OpenAI + Cosmos DB,
          and automated end-to-end ML workflows on Databricks with MLflow. Skilled
          across AWS (EC2, S3, SageMaker, Textract, Rekognition, Kinesis), Flask,
          and Streamlit — from EDA to enterprise deployment.
        </p>
      </div>
    </div>
  );
};

export default About;
