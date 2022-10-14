import {NextApiRequest, NextApiResponse} from "next";
import {Person} from "../../src/types/Person";
import {ResponseError} from "../../src/types/ResponseError";
import {persons} from "../../data/persons";


export default function personsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Person | ResponseError | Person[]>
) {
  const { query } = req
  const { name } = query
  if (name === undefined) {
    return res.status(200).json(persons);
  }
  const filtered = persons.filter((p) => p.name === name)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with name: ${name} not found.` })
}