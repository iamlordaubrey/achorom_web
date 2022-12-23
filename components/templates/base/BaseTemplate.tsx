import styles from "./BaseTemplate.module.css";

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }: { sampleTextProp: string }) => {
  return (
    <div className={styles.container}>
      {sampleTextProp}
    </div>
  )
};

export default BaseTemplate;
