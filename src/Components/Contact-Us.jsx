import ContactForm from './ContactForm'
import CommonHeading from './CommonHeading'
import FormFooter from './FormFooter'

function ContactUs() {

  return (
    <div className='mt-[2vw] relative mb-[-7vw]'>
    <CommonHeading title="Contact Us" />
   <ContactForm/>
   <div className="mb-[-7vw"> <FormFooter className="mb-[-7vw]"/></div>
  
    </div>
  )
}

export default ContactUs