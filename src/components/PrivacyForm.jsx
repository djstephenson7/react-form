import React from 'react';
import { useForm } from 'react-hook-form';

const PrivacyForm = ({ getData }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    data.receiveUpdates = JSON.parse(data.receiveUpdates);
    data.receiveComms = JSON.parse(data.receiveComms);
    getData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          {...register('receiveUpdates')}
          name="receiveUpdates"
          value={true}
          type="checkbox"
        />
        Receive updates about Tray.io products by email
      </label>
      <br />
      <label>
        <input
          {...register('receiveComms')}
          name="receiveComms"
          value={true}
          type="checkbox"
        />
        Receive communications by email for other products created by the
        Tray.io team
      </label>
      <br />
      <button type="submit">submit</button>
    </form>
  );
};

export default PrivacyForm;
