import {useState} from "react";

const DictionaryEditor = ({data, updateDictionaryData, removeElement, addElement}) => {
    const [keyValue, updateKeyValue] = useState('');
    const [newValue, updateNewValue] = useState('');

    const addNewElement = (event, element) => {
        addElement(element)
        event.preventDefault();
    }

    const dataMap = Object.entries(data);

    return (
        <main className='content'>
            <h3>Dictionary editor</h3>
            <ul>
                {dataMap.map(([key, value], index) => {
                        return (
                            <li key={key}>{`${key}: `}
                                <input type="text" value={value}
                                       onChange={e => updateDictionaryData(key, e.target.value, index)}/>
                                <span onClick={() => removeElement(key)}/>
                            </li>
                        )
                    }
                )}
            </ul>

            <form onSubmit={event => addNewElement(event, {[keyValue]: newValue})}>
                <label>
                    <p>Add new element:</p>
                    <input type="text" name="key" placeholder='New key' value={keyValue}
                           onChange={e => updateKeyValue(e.target.value)}/>
                    <input type="text" name="value" placeholder='New value' value={newValue}
                           onChange={e => updateNewValue(e.target.value)}/>
                </label>
                <button className="add-new" type="submit">Add new</button>
            </form>
        </main>
    )
}

export default DictionaryEditor;