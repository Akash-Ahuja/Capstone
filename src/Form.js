import React from "react";
import './form.css';

function Form(){
    return (
        <div>
           <h1> Feedback Form </h1>
           <form>
               <div className="form_container">
                    <p>
                        <b>
                            First Name
                        </b>
            
                    <input
                        type="text"  id= "first name" className="form_textbox" placeholder="First Name"/><br/> 
                    </p>
                    <p>
                        <b>
                            Last Name
                        </b>
                        <input type="text" id="last name" placeholder="Last Name"/><br/>
                    </p>           
                    <p>
                        <b>
                            Borough in NYC
                        </b>
                        <select name="Borough name">
                                <option value="Bronx">Bronx</option>
                                <option value="Brook">Brooklyn</option>
                                <option value="Qns">Queens</option>
                                <option value="Man">Manhataan</option>
                                <option value="SI">Staten Island</option>
                            </select>
                    </p> 
                    <p>
                        <b>
                            Locations
                        </b>
                        <select name="Locations">
                            <option value="Zoo">Bronx Zoo</option>
                            <option value="Bridge">Brooklyn Bridge</option>
                            <option value="JH">Jackson Heights</option>
                            <option value="CP">Central Park</option>
                            <option value="Museum">SI Museum</option>
                            <option value="other">Other</option>

                        </select>
                    </p>    
                    <p>
                        <b>Please describe your problem</b><br/>
                        <textarea rows="8" cols="45" id="rem" name="Please type your problem"></textarea>
                        
                    </p>
                    <p>
                        <b>How would you solve your problem.</b><br/>
                        <textarea rows="8" cols="45" id="rem" name="Please type your problem"></textarea>
                        
                    </p>
                    <p>
                        <input type="submit" name="Request" value="Submit"/> {/* back to profile and alert your form as being submit for review */}
                        <input type="reset" name="clear" value="clear form"/>
                    </p>
                    
               </div>
           </form>

        </div>
    );
}

export default Form;