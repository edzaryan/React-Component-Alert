import styles from './App.module.css';
import Alert from './components/alert/Alert';
import {useState} from "react";



const App = () => {
    const [isAlertOpen, setAlertOpen] = useState(true);

    const handleCloseAlert = () => {
        setAlertOpen(prevState => !prevState);
    }

  return (
    <div className={styles.app}>
        { isAlertOpen && <Alert isDismissible={true} onClose={handleCloseAlert}>
            <div>Holy guacamole! You should check in on some of those fields below.</div>
        </Alert> }
    </div>
  );
}

export default App;
