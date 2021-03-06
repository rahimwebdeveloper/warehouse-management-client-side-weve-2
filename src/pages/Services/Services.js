import { useQuery } from 'react-query';
import Service from './Service';
import Loading from '../../components/Loading'

const Services = () => {

    const { data:phones, isLoading } = useQuery('service', () =>
        fetch('http://localhost:5000/service')
            .then(res => res.json())
    );


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-10'>
            <h1 className='text-3xl text-center mb-10 text-primary'>Latest Official Phones</h1>
            <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    phones.map( phone => <Service
                    phone={phone}
                    key={phone._id}
                    ></Service> )
                }
            </div>

        </div>
    );
};

export default Services;