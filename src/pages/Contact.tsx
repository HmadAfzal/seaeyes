import Form from '@/components/contact/form'
import Map from '@/components/contact/map'
import Wrapper from '@/components/Wrapper'


const Contact = () => {


    return (
        <Wrapper>
            <div className="flex flex-col items-center justify-center py-20 h-full w-full">
                <div className="flex flex-col items-center mt-8 w-full">
                    <h1 className="text-2xl md:text-6xl md:!leading-tight font-bold text-center">
                        Get in Touch with Sea Eyes International Business LLC
                    </h1>
                    <p className="text-sm md:text-lg text-muted-foreground my-6 text-center">
                        We provide world-class solutions across Oman, Dubai, and globally to help your business thrive.
                    </p>
                </div>
                <div className='my-12'>
                    <Map />
                </div>
                <Form />
            </div>



        </Wrapper>
    )
}

export default Contact
