### **GETTING STARTED**
------------------------

### **BEFORE STARTING A TASK.**
1. First clone the repository.
   ```
   git clone
   ```
2. Checkout main branch
   ```
   git checkout main
   ```
3. Create a new branch following the format _ec-t-[issue-number]-[3-to-5-words-describing-the-task]_ eg _ec-t-36-create-all-atoms_
   ```
   git checkout -b ec-t-36-create-all-atoms
   ```

### **COMMITTING YOUR CHANGES**
1. Add your changes to staging area to track your changes by running the **git add** command eg to add all modified files run
   ```
   git add .
   ``` 
2. Commit your changes by running the **git commit** command. Your commit message must follow the format EC-T-[issue-number] | Actual message e.g. _git commit -m "EC-T-36 | Created all buttons"_
   ```
   git commit -m "EC-T-36 | Created all buttons"
   ```

### **WHEN YOU HAVE COMPLETED A TASK**
1. Push your changes to remote by running the git push command
   ```
   git push origin <branch-name>
   ```
2. Go to GitHub and make a Pull Request (PR) to main. 
3. Request review



### **RUNNING THE CODE**
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
