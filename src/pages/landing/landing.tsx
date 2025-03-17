import s from './style.module.scss';
import { Section } from './ui/section';
import { LandingCard, Input, LinkBtn } from '@shared/index';
import EyeIcon from '@shared/ui/icons/eye';
import InfoIcon from '@shared/ui/icons/info';

const cardsContent = [
  {
    title: 'Карточка 1',
    text: 'Пустота',
  },
  {
    title: 'Карточка 2',
    text: 'Пустота',
  },
];

export const LandingPage = () => {
  return (
    <main className={s.exampleHomework}>
      <Section>
        <h1>Интересные факты про эту страницу</h1>

        <h2>В ней нет смысла</h2>
        <LinkBtn href="#second-screen">
          <div className={s.btn}>
            <span>Перейти дальше</span>
            <EyeIcon></EyeIcon>
          </div>
        </LinkBtn>
      </Section>

      <Section id="second-screen" customStyle={s.bgAccent}>
        <h2>Смотрите какие карточки</h2>
        <div className={s.cardsContainer}>
          {cardsContent.map((card, i) => (
            <LandingCard {...card} key={i}></LandingCard>
          ))}
        </div>
      </Section>

      <Section customStyle={s.block}>
        <h2>Интерактив?</h2>

        <Input type="text" placeholder="Напишите тут что-нибудь"></Input>

        <LinkBtn href="#">
          <div className={s.btn}>
            <span>Вывести текст в alert</span>
            <InfoIcon customStyle={s.red}></InfoIcon>
          </div>
        </LinkBtn>
      </Section>
    </main>
  );
};
