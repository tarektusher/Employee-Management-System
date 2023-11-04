
import "../../src/Dash.css";
import {useForm, useFieldArray} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import '../App.css'
import * as React from 'react';


const tempFormHook = () =>{

  // const form = useForm();
  const form = useForm({
    defaultValues:{
      username : "Tarek",
      email : "",
      channel : "",
      social : {
        facebook : "www.facebook.com/@@@@@",
        instagram : "instagram"
      },
      phonenumbers : ["", ""],
      phoneArray : [{ number : ''}],
      age : 0,
      dob : new Date(),


    }
  });
  const {register, control, handleSubmit,formState, watch, getValues, reset} = form;
  const {errors} = formState;
  const onSubmit=(data)=>{
    console.log("::: Form Submitted :::", data);
  }
  const {fields, append, remove} = useFieldArray({
    name : 'phoneArray',
    control
  })
  const handleGetValues = () =>{
    console.log("get Values", getValues());
  }
  // const watchUserName = watch("username");
  const watchUserName = watch(["username", "email"]);
  return (
    <div>
      <h2>Watch Username : {watchUserName}</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='formControl'>
          <label htmlFor='username'>User Name</label>
          <input type='text' id='username' {...register('username',{
            required : {
              value : true,
              message : "username is required",
            },
            

          })} ></input>
          <p className='error'>{errors.username?.message}</p>
          
        </div>
        <br /><br />
        <div className='formControl'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' {...register('email',{
            pattern : {
              value : 
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message : "Invalid Email Format",
            },
            validate : {
              notAdmin: (fieldValue) =>{
                return (
                  fieldValue !== "admin@example.com" || "Enter a different email value"
                )
              }
            },

          })} />
          <p className='error'>{errors.email?.message}</p>
        </div>
        <br /><br />
        <div className='formControl'>
          <label htmlFor='channel'>Channel</label>
          <input type='text' id='channel' {...register('channel',{
            required : {
                value : true, 
                message : "channel Name is required",
            }
          })}/>
          <p className='error'>{errors.channel?.message}</p>
        </div>
        <br /><br />
        <div className='formControl'>
          <label htmlFor='facebook'>Facebook</label>
          <input type='text' id='facebook' {...register('social.facebook')}/>
        </div>
        <br /><br />
        <div className='formControl'>
          <label htmlFor='instagram'>Instagram</label>
          <input type='text' id='instagram' {...register('social.instagram')}/>
        </div>
        <br /><br />
        <div className='formControl'>
          <label htmlFor='primary-phone'>Primary Phone Number</label>
          <input type='text' id='primary-phone' {...register('phonenumbers[0]')}/>
        </div>
        <br /><br />
        <div className='formControl'>
          <label htmlFor='secondary-phone'>Secondary Phone Number</label>
          <input type='text' id='secondary-phone' {...register('phonenumbers[1]')}/>
        </div>
        <br /><br />
        <div>
          <label htmlFor="">List of Phone Numbers</label>
          <div>
            {fields.map((field, index)=>{
              return(
                <div className="formControl" key={field.id}>
                  <input type="text" {...register(`phoneArray.${index}.number`)} />

                  {
                    index>0 && (
                      <button type='button' onClick={()=> remove(index)}>
                        Remove Phone Number</button>
                    )
                  }
                </div>
              )
            })}
            <button type='button' onClick={()=> append({ number :""})}>
              Add Phone Number</button>
          </div>
        </div>
        <div className='formControl'>
          <label htmlFor='age'>age</label>
          <input type='number' id='age' {...register('age',{
            valueAsNumber : true,
            required : {
                value : true, 
                message : "Age is required",
            }
          })}/>
          <p className='error'>{errors.age?.message}</p>
        </div>
        <br /><br />
        <div className='formControl'>
          <label htmlFor='dob'>Date of Birth</label>
          <input type='date' id='dob' {...register('dob',{
            valueAsDate : true,
            required : {
                value : true, 
                message : "Date of Birth is required",
            }
          })}/>
          <p className='error'>{errors.dob?.message}</p>
        </div>
        <br /><br />
        <button>Submit</button>
        <button type='button' onClick={handleGetValues}>Get Value</button>
        <button type='button' onClick={()=>reset()}>Reset</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
}