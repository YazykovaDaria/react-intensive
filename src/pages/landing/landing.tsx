import s from './style.module.scss';
import { Section } from './ui/section';
import { LandingCard, LinkButton, EyeIcon } from '@shared/index';
import { Interactive } from './interactive/interactive';

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
        <h1 className={s.title}>Интересные факты про эту страницу</h1>

        <p className={s.title}>В ней нет смысла</p>
        <LinkButton href="#second-screen">
          <div className={s.btn}>
            <span>Перейти дальше</span>
            <EyeIcon></EyeIcon>
          </div>
        </LinkButton>
      </Section>

      <Section id="second-screen" customStyle={s.bgAccent}>
        <h2 className={s.title}>Смотрите какие карточки</h2>
        <div className={s.cardsContainer}>
          {cardsContent.map((card, i) => (
            <LandingCard {...card} key={i}></LandingCard>
          ))}
        </div>
      </Section>

      <Section customStyle={s.block}>
        <h2 className={s.title}>Интерактив?</h2>
        <Interactive></Interactive>
      </Section>
    </main>
  );
};
