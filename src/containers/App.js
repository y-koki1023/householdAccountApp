import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Table from '../components/Table'
import styles from '../css/general.module.css'
function App(){
    return(
        <div className = {styles.mainBody}>
            <Header />
            <Form />
            <Table />
        </div>
    )
}

export default App;