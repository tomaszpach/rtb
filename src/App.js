import './App.scss';
import {useState} from "react";

import DictionaryEditor from './components/DictionaryEditor';
import Header from './components/Header';

function App() {
    const dictionaryRawDataObject = {
        openKey: 'openValue',
        closeKey: 'closeValue',
        editKey: 'editValue',
        testKey: 'testValue',
        anotherKey: 'anotherValue'
    }

    const [dictionaryData, updateDictionaryData] = useState(dictionaryRawDataObject);

    const handleRemoveElement = key => {
        if (dictionaryData.hasOwnProperty(key)) {
            updateDictionaryData(() => {
                const updateData = {...dictionaryData}
                delete updateData[key];
                return updateData;
            });
        }
    }

    const handleEditElement = (key, value) => {
        updateDictionaryData({
            ...dictionaryData,
            [key]: value,
        })
    }

    const handleAddElement = element => {
        updateDictionaryData({
            ...dictionaryData,
            ...element,
        });
    }

    console.log(dictionaryData)

    return (
        <div className="App">
            <Header/>
            <DictionaryEditor data={dictionaryData}
                              updateDictionaryData={(key, value, index) => handleEditElement(key, value, index)}
                              removeElement={key => handleRemoveElement(key)}
                              addElement={element => handleAddElement(element)}/>
        </div>
    );
}

export default App;
