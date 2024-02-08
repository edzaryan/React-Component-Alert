import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleInfo, faTriangleExclamation, faXmark} from '@fortawesome/free-solid-svg-icons';
import styles from './Alert.module.css';

const types = {
    primary: {
        borderColor: "#a7d0ff",
        backgroundColor: "#CFE2FF",
        color: "#052C65",
        icon: <FontAwesomeIcon icon={faCircleInfo} />
    },
    success: {
        borderColor: "#B9DACB",
        backgroundColor: "#D1E7DD",
        color: "#0A3622",
        icon: <FontAwesomeIcon icon={faCircleCheck} />
    },
    warning: {
        borderColor: "#FFE69C",
        backgroundColor: "#FFF3CD",
        color: "#664D03",
        icon: <FontAwesomeIcon icon={faTriangleExclamation} />
    },
    danger: {
        borderColor: "#F1AEB5",
        backgroundColor: "#F8D7DA",
        color: "#58151C",
        icon: <FontAwesomeIcon icon={faTriangleExclamation} />
    },
}

const Alert = React.memo(({ 
    isDismissible = false, 
    children, 
    type = "warning",
    onClose
}) => {

    const targetStyle = types[type];

    return (
        <div className={styles.alert}
             style={{
                 backgroundColor: targetStyle.backgroundColor,
                 border: `1px solid ${targetStyle.borderColor}`,
                 color: targetStyle.color
            }}>
            <div className={styles.content}>
                <div className={styles.icon}>{targetStyle.icon}</div>
                <div className={styles.body}>{children}</div>
            </div>
            {
                isDismissible &&
                    <button className={styles.close}
                        style={{ backgroundColor: targetStyle.backgroundColor, color: targetStyle.color }}
                        onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
            }
        </div>
    );
});

export default Alert;
