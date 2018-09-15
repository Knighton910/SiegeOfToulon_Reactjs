import React from 'react';
import style from './TriangleGrid.scss';
import { Svg } from './Svg';
import { Parallax } from 'react-scroll-parallax';
import fleur from './fleurDeLysc.png';
// import gridPurple from '!!raw-loader!./grid-purple.svg';


const TriangleGrid = () => (
    <main className={style.root}>
        <div className={style.container}>
            <Parallax offsetYMax={25} offsetYMin={-25}>
                <Svg svg={fleur} className='' />
                <img src={fleur}/>
            </Parallax>
            <Parallax
                offsetYMax={50}
                offsetYMin={-50}
                offsetXMax={13}
                offsetXMin={-13}
            >
                <Svg svg={fleur} className='' />
                <img src={fleur}/>
            </Parallax>
        </div>
    </main>
);

export default TriangleGrid;