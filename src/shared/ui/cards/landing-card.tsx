import s from './landing.module.scss';

type LandingCardProps = {
  title: string;
  text: string;
};

export const LandingCard = ({ title, text }: LandingCardProps) => (
  <article className={s.card}>
    <h3>{title}</h3>
    <span>{text}</span>
  </article>
);
