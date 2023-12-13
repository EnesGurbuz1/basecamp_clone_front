import { WarningOutlined, InfoCircleOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import type { NextPage } from 'next';

const AdminPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div className="text-center w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Adminland</h3>
              <p className="text-sm text-gray-600">Manage your Basecamp account</p>
            </div>
            <WarningOutlined className="text-red-500" />
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="bg-red-100 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Warning!</strong>
              <span className="block sm:inline"> This account is using 4.58 GB of 5 GB available. That's over the limit.</span>
              <p className="mt-2 text-sm">To add storage, please contact an <a href="#" className="text-red-600 hover:text-red-800">account owner</a>.</p>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <InfoCircleOutlined className="text-red-500" />
              </span>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">What's this?</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Adminland is the place for admins and owners to oversee this Basecamp account. They have special permissions to
                  add/remove people, change billing, export data, etc. Need something like that done? Ping someone listed below.
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Administrators</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <p className="mb-4">Reach out to an admin to...</p>
                  <div className="flex items-center mb-2">
                    <UserOutlined />
                    <p className="ml-2">Choose which projects people can access on the account</p>
                  </div>
                  <div className="flex items-center">
                    <SettingOutlined />
                    <p className="ml-2">Manage message categories</p>
                  </div>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Account Owners</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <p className="mb-4">Reach out to an account owner to...</p>
                  <div className="flex items-center mb-2">
                    <UserOutlined />
                    <p className="ml-2">Upgrade/downgrade the account</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <SettingOutlined />
                    <p className="ml-2">Handle billing info or invoices</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <UserOutlined />
                    <p className="ml-2">Export account data</p>
                  </div>
                  <div className="flex items-center">
                    <SettingOutlined />
                    <p className="ml-2">Require two-factor authentication</p>
                  </div>
                  <div className="flex items-center">
                    <SettingOutlined />
                    <p className="ml-2">Cancel this account.</p>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
