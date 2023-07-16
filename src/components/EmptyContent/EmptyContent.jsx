import emptyBox from '../../assets/images/empty/empty-box.png'

const EmptyContent = ({emptyText}) => {
    return (
        <div className='md:p-28 p-10 flex items-center justify-center'>
            <div>
                <div className='flex items-center justify-center'>
                    <img src={emptyBox} className='w-28' alt="empty content image" />
                </div>
                <h2 className='text-2xl text-neutral-500 font-bold text-center mt-8'>
                    {emptyText}
                </h2>
            </div>
        </div>
    );
};

export default EmptyContent;