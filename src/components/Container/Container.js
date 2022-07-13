import s from './Container.module.css'

export const Container = ({children}) => {
  return <section className={s.container}>{children}</section>;
};