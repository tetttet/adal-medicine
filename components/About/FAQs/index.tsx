import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import { FaQuestionCircle } from "react-icons/fa";

const FAQ: React.FC = () => {
  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Изображение */}
          <div className="lg:mx-0 mx-auto">
            <Image
              src="/images/hero/hero-4.avif"
              alt="FAQ"
              width={680}
              height={1044}
              className="lg:w-full"
              unoptimized={true}
            />
          </div>

          {/* Вопросы и ответы */}
          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2 items-center">
              <FaQuestionCircle className="text-2xl text-primary" />
              Часто задаваемые вопросы
            </p>

            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white mt-2 mb-4">
              Всё о медицинском туризме с Adal Medicine
            </h2>

            <p className="text-dark/50 dark:text-white/50 pr-20">
              Мы собрали самые распространённые вопросы, которые задают пациенты
              перед поездкой на лечение в Турцию. Это поможет вам подготовиться
              и чувствовать себя уверенно.
            </p>

            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    1. Какие документы нужны для организации лечения?
                  </AccordionTrigger>
                  <AccordionContent>
                    Вам потребуется паспорт, результаты предыдущих обследований
                    (если есть), выписка из амбулаторной карты и снимки (МРТ,
                    КТ, УЗИ). Мы поможем перевести документы и передать их в
                    клинику.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    2. Кто меня встретит в Турции?
                  </AccordionTrigger>
                  <AccordionContent>
                    Вас встретит представитель Adal Medicine в аэропорту,
                    предоставит трансфер до гостиницы или клиники, а также будет
                    сопровождать на всех этапах лечения.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    3. В каких клиниках проходит лечение?
                  </AccordionTrigger>
                  <AccordionContent>
                    Мы сотрудничаем только с ведущими клиниками класса &quot;А&quot; в
                    Стамбуле и Анкаре, имеющими международные аккредитации JCI и
                    высокий рейтинг по качеству медицинских услуг.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    4. Что входит в медицинский пакет?
                  </AccordionTrigger>
                  <AccordionContent>
                    Консультации, диагностика (анализы, УЗИ, МРТ), лечение или
                    операция, сопровождение переводчика, трансфер, проживание и
                    последующее наблюдение — всё под ключ.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
