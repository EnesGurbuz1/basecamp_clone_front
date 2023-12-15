//mobile compatibility has been implemented..
//mobil uyumluluk uygulanmıştır..
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Switch } from 'antd';

const OutOfPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-6 p-8 space-y-6'>
      <div className='flex flex-col items-center justify-center rounded-2xl shadow bg-white p-8 space-y-4'>
        <h1 className="text-2xl font-semibold">Out of Office?</h1>
        <p className="text-center text-sm">
          Heading out on holiday? Taking a few days off? Let your colleagues
          know you’re out.
        </p>
        <div className='flex flex-col items-center justify-center bg-purple-600 rounded-xl p-8 space-y-4'>
          <Avatar size={130} icon={<UserOutlined />} />
          <h2 className='text-xl font-semibold'>Hasan Karahaliloğlu</h2>
          <h4 className='text-sm text-white text-opacity-65'>JR Engineer at Fırat DİKMEN</h4>
          <div className="flex items-center">
            <span className='text-white pr-4'>I'm in</span>
            <Switch defaultChecked />
            <span className='text-white pl-4'>I'm out</span>
          </div>
        </div>
      </div>
      <section className='flex flex-col w-full max-w-lg text-left bg-white p-6 rounded-xl shadow'>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">How will my colleagues know that I'm out?</h4>
          <p className="text-sm">
            There are several ways in which we flag that you are out, and when
            you are coming back:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-sm">
                <strong>Person Card + Avatar: </strong>We place an "OUT" yellow
                overlay on your avatar across the entire Basecamp. Check it out
                by switching "I'm out" using the toggle above.
              </p>
            </li>
            <li>
              <p className="text-sm">
                <strong>Autocomplete: </strong>If someone types @yourname, the
                autocomplete will show that you are out and when you are coming
                back.
              </p>
            </li>
            <li>
              <p className="text-sm">
                <strong>Your activity: </strong>If someone visits your activity
                page, they will see when you are out and when you are coming
                back.
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-4 mt-4">
          <h4 className="text-lg font-semibold">Do I get notifications while I'm Out?</h4>
          <p className="text-sm">
            Out of Office doesn't affect your notifications. To limit your own
            notifications, you can change your notifications from the{" "}
            <a href="#" className="text-blue-600">Notifications Settings screen</a>.
          </p>
        </div>
        <div className="space-y-4 mt-4">
          <h4 className="text-lg font-semibold">Is there an auto-responder while out?</h4>
          <p className="text-sm">
            Out of Office is NOT an auto-responder. OOO is a visual way to
            communicate to other people that you're out, and when you'll be
            back.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OutOfPage;
