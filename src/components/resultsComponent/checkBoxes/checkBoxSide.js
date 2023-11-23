import CheckBox from './checkBox';

const CheckBoxSide = ( {uniqMembers,hendledMembers} ) => {
    return (
        <div className='checkBoxSide'>
            <div>
                {uniqMembers.map((el, index) => {
                    return(                    
                    el.Member !== null && el.Member?.trim() !== ""  ? (
                        <CheckBox key={index} name={el} checked={el.isChecked?el.isChecked:false} onChange={hendledMembers} />
                    ):null
                    
                )})}
            </div>
            
        </div>
    );
};

export default CheckBoxSide;
