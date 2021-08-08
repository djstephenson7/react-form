import React from 'react';
import { useForm } from 'react-hook-form';

const PrivacyForm = ({ getData }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    data.receiveUpdates = JSON.parse(data.receiveUpdates);
    data.receiveComms = JSON.parse(data.receiveComms);
    getData(data);
  };

  const locale = {
    receiveUpdates: ' Receive updates about Tray.io products by email',
    receiveComms:
      ' Receive communications by email for other products created by the Tray.io team',
    submit: 'Submit',
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('receiveUpdates')}
          name="receiveUpdates"
          value={true}
          type="checkbox"
        />
        {locale.receiveUpdates}
      </div>
      <br />
      <div>
        <input
          {...register('receiveComms')}
          name="receiveComms"
          value={true}
          type="checkbox"
        />
        {locale.receiveComms}
      </div>
      <br />
      <button className="submit" type="submit">
        {locale.submit}
      </button>
    </form>
  );
};

export default PrivacyForm;
