const AlertForm = ({ msg }) => {
  return (
    <div
      className="p-1 mt-2  text-sm text-red-700 bg-red-100 rounded-md dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-bold">Error!</span> {msg}
    </div>
  );
};

export default AlertForm;
