// import { TextInput, TextInputProps } from '@mantine/core';
// import React from 'react';
// import clsx from 'clsx';
// import AlertCircle from '@assets/iconComponents/AlertCircle';
// import { Mail01Icon } from '@assets/iconComponents';

// interface Props extends TextInputProps {
//   withIcons?: boolean;
// }

// export const CustomInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
//   if (props.withIcons) {
//     return (
//       <TextInput
//         ref={ref}
//         error={props.error && 'Something went wrong'}
//         rightSection={
//           props.error ? <AlertCircle className="size-4 text-error-500 mr-[14px]" /> : null
//           // <HelpCircleIcon className="size-4 text-gray-400 mr-[14px]" />
//         }
//         classNames={{
//           input: clsx('pl-[42px]'),
//         }}
//         leftSection={<Mail01Icon className="size-5 text-gray-500 ml-[12px]" />}
//         {...props}
//       />
//     );
//   }
//   return (
//     <TextInput
//       ref={ref}
//       rightSection={
//         props.error ? <AlertCircle className="size-4 text-error-500 mr-[14px]" /> : null
//       }
//       {...props}
//     />
//   );
// });
