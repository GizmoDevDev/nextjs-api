import classNames from './PersonalPage.module.css'

type Props = {
  name: string,
  height: number,
  mass: number,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  gender: string,
  img: string,
}

export const PersonPage = ({name, hair_color, height, eye_color, skin_color, img, gender, mass}: Props) => {
  return <div className={classNames['main-container']}>
    <img src={img} width={500} height={500} alt={name} />
    <div className={classNames['info-container']}>
      <div>Name: {name}</div>
      <div>Height: {height}</div>
      <div>Mass: {mass}</div>
      <div>Skin color: {skin_color}</div>
      <div>Eye color: {eye_color}</div>
      <div>Hair color: {hair_color}</div>
      <div>Gender: {gender}</div>
    </div>
  </div>
}