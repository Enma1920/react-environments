import { Filter, Numbers, PersonForm } from "./components";
import { useFormFilter, usePersons, useForm } from "./hooks";
const App = () => {

	const { newName, newNumber, handleNewNameValue, handleNewNumberValue } = useForm();
	const { newFilter, handleNewFilterValue } = useFormFilter();
	const { persons, handleNewPersonsValue } = usePersons();

	const miTexto = import.meta.env.VITE_MI_TEXTO;

	return (
		<div>
			<h2>Phonebook</h2>
			<p>{miTexto}</p>
			<Filter setNewFilter={ handleNewFilterValue }/>
			<PersonForm 
				newName={ newName } 
				setNewName={ handleNewNameValue } 
				newNumber={ newNumber }
				handleNewNumber={ handleNewNumberValue }
				persons={ persons }
				setPersons={ handleNewPersonsValue }

			/>
			<Numbers 
				newFilter={ newFilter } 
				persons={ persons }
				setPersons= { handleNewPersonsValue }
			/>
		</div>
	);
};

export default App;
