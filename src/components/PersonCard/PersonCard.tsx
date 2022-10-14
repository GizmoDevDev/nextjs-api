import Link from "next/link";
import classNames from './PersonalCard.module.css';

type Props = {
  name: string;
  img: string;
}

export const PersonCard = ({name, img}: Props) => {
  return <Link href={`/person/${name}`}>
    <a>
      <div className={classNames.container}>
        <img src={img} width={250} height={250} alt={name} />
        {name}
      </div>
    </a>
  </Link>
}