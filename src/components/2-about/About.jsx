import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react";
// import aboutAnimation from "../../animation/aboutAnimation.json";
import aboutAnimation from '../../assets/animations/aboutAnimation.json'

export default function About() {

const cards=[
  {
    id:"1",
    title:"نشاطنا",
    content:"نختص ببيع التجزئة للإكسسوارات التقنية حيث نطور أسلوب الحياة من خلال مزج التقنية بالحلي، نختصر المهام الروتينية ونراقب حالتك البدنية ، نجعل الحياة أسهل لأننا نؤمن أن الحُلي ليست مُجرد قطعة نرتديها فنصوغ الإبتكار لنتزين به"
  },
  {
    id:"2",
    title:"رؤيتنا",
    content:"نسعى في فريد بأن نكون كأسرة فريده من نوعها , نتعلم و نستزيد بالعلم و المعرفة حتى تُصقل مهاراتنا و نتشارك خبراتنا , فتمنحنا تجاربنا أوسمة , و نحقل ببراثن شوكنا كنزنا المدفون فنتيح للزهور أن تزهر و للثمار أن تنضج و تثمر"
  },
  {
    id:"3",
    title:"رسالتنا",
    content:"نسعى في فريد بأن نكون كأسرة فريده من نوعها , نتعلم و نستزيد بالعلم و المعرفة حتى تُصقل مهاراتنا و نتشارك خبراتنا , فتمنحنا تجاربنا أوسمة , و نحقل ببراثن شوكنا كنزنا المدفون فنتيح للزهور أن تزهر و للثمار أن تنضج و تثمر"
  },
  {
    id:"4",
    title:"هدفنا",
    content:"نهدف بأن يكون فريد بيئة عمل مثالية و فريق واعد و بناءً يفوق التوقعات, وأن نترك الاثر الفريد فيساعدنا في شق خطواتنا كطلاب و خريجين و خبراء نحو التميز بإذن الله"
  },
]

  return (
    <div className="about-container">
    <div className="about flex ">
      <div className="about-farid flex ">
        <h1> مين فريد؟</h1>
        <div className="farid-desc ">
        <p>
          فريد هي شركة إفتراضية، واحدة من أهم الشركات الإفتراضية الرائدة في
          معسكر أكاديمية إقرار المحاسبية التطبيقية ، تأسست عام 2024م لتنشئ بيئة
          محاسبية إفتراضية تحاكي وتوافق رؤية المملكة العربية السعودية 2030 ،
          لتنتج أفراد محاسبين قادرين على تجاوز تحديات سوق العمل
        </p>
        </div>
      </div>

      <div className="fared-anaimation flex ">
      <div className="container-anaimation flex "><Lottie animationData={aboutAnimation} /></div>
      </div>
    </div>

    <div className="about-details flex">
      {cards.map((card)=>
         {
          return <div className="about-card flex" key={card.id}>
          <h1>{card.title}</h1>
          <p>{card.content}</p>
           </div>
        })}
  </div>

  <div className="quote flex ">
    <h1>ولعل ما يمثلنا إقتباس من رائعة الأمير خالد الفيصل</h1>
    <div className="quote-box flex  ">
    <FontAwesomeIcon icon={faQuoteLeft} className="first-quote" />
      <p>النوّ عالي و السمـا فوقـه أعلـى<br/>
        ولا فاق علم ٍ جـاه علـم ٍ يفوقـي<br/>
           الصعب هلاّ قلت يا صعـب سهـلا<br/>
           دامك تبيني فأنت يا صعـب شوقـي</p>
      <FontAwesomeIcon icon={faQuoteRight} className="seconed-quote" />
    </div>


  </div>



    </div>
  );
}