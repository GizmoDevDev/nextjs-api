import {NextPage} from "next";
import {useRouter} from "next/router";
import {persons} from '../../data/persons'
import {PersonPage as PersonPageComponent} from '../../src/components/PersonPage/PersonPage'
import Link from "next/link";
import styles from '../../styles/Home.module.css'

const PersonPage: NextPage = () => {
  const router = useRouter();
  const {name} = router.query;

  const person = persons.find(p => p.name === name)

  if (person === undefined) return null;

  return <div className={styles.main}>
    <Link href="/">
      <a>
        <h3>Назад</h3>
      </a>
    </Link>
    <PersonPageComponent {...person} />
    </div>
}

export default PersonPage;