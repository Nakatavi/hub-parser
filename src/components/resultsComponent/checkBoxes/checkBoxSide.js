import CheckBox from './checkBox';

const CheckBoxSide = ({ uniqMembers, hendledMembers }) => {
    
    return (
        <div className='checkBoxSide'>
            <div>
                {uniqMembers.map((el, index) => (
                    el.name !== null && el.name?.trim() !== "" ? (
                        <CheckBox key={index} name={el.Member} onChange={hendledMembers} />
                    ):null
                    
                ))}
            </div>
            
        </div>
    );
};

export default CheckBoxSide;
