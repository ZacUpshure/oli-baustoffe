import React from 'react';
import styles from './Configurator.module.css';
// import Circle from '../../components/circle/Circle';
import { useState } from 'react';
import Dachinformation from './Dachinformation';
import Produktauswahl from './Produktauswahl';
import Dachzubehör from './Dachzubehör';
import Befestigungsmaterial from './Befestigungsmaterial';
import Abschluss from './Abschluss';

// interface CircleProps {
//     className: string;
//     children?: React.ReactNode;
//   }
  
//   const Circle = ({ className, children }: CircleProps) => {
//     return <div className={className}>{children}</div>;
//   };

const Configurator = () => {
    // const [circle] = useState(4)
    // const arr=[];
    // for (let i = 0; i < circle; i++) {
    //   arr.push(<Circle className="circle" key={i}>{i}</Circle>);
    // }
    const [page, setPage] = useState(0);

    const FormTitle = ["Dachinformationen", "Produktauswahl", "Dachzubehör", "Abschluss"];
    const progressPercentage = ((page + 1) / FormTitle.length) * 100;

    const PageDisplay = () => {
        if(page === 0) {
            return <Dachinformation />
        }
        else if(page === 1) {
            return <Produktauswahl />
        }
        else if(page === 2) {
            return <Dachzubehör />
        }
        else if(page === 3) {
            return <Abschluss />
        }
    }
  return (
    <div className='container center-text'>
        <h1 className='heading_primary'>Konfigurator</h1>
        <div className={styles.content}>
            <div className={styles.form}>
                <div className={styles.progressbar}>
                <div className={styles.progressbarFill}
                     style={{ width: `${progressPercentage}%` }} />
                </div>
                <div className={styles.form_container}>
                    <div className="header">
                        <h2 className='heading_tertiary padding_top'>{FormTitle[page]}</h2>
                    </div>
                    <div className="body">{PageDisplay()}</div>
                    <div className="form_footer">
                        <div className="btn margin-bottom-md">
                            <button disabled={page == 0}
                                    onClick={() => {setPage((currPage) => currPage - 1)}} 
                                    className='btn btn--full margin-right-sm'> Prev </button>
                            <button disabled={page == FormTitle.length - 1}
                                    onClick={() => {setPage((currPage) => currPage + 1)}} 
                                    className='btn btn--full margin-right-sm'> Next </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Configurator