import {NextPage} from "next";
import {useRouter} from "next/router";
import {PersonPage as PersonPageComponent} from '../../src/components/PersonPage/PersonPage'
import Link from "next/link";
import styles from '../../styles/Home.module.css'
import {useEffect, useState} from "react";
import {Person} from "../../src/types/Person";
import {string} from "prop-types";

const PersonPage: NextPage = () => {
  const router = useRouter();
  const {name} = router.query;
  console.log(name)
  const [person, setPerson] = useState<Person>()
  const [error, setError] = useState<string>()

  const searchParameters = new URLSearchParams(typeof name === 'string' ? {name} : {name: ''});

  useEffect(function fetchPerson() {
    fetch(`/api/persons?${searchParameters}`)
      .then(async (data) => {
        const result = await data.json();
        if (!result.id) setError(result.message);
        setPerson(!result.id ? undefined : result);
      })
      .catch(() => console.error('Error'))
  }, [])

  if (person === undefined && !error) return <>Loading...</>;

  return <div className={styles.main}>
    <Link href="/">
      <a>
        <h3>Назад</h3>
      </a>
    </Link>
    {person !== undefined && <PersonPageComponent {...person} />}
    {error}
    </div>
}

export default PersonPage;