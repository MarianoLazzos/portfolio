'use client'

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='p-5'>
      <Switch
        checked={theme === 'light'}
        onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <Button
        onClick={() => {
          if (theme === 'light') setTheme('dark')
          if (theme === 'dark') setTheme('light')
        }}
      >
        Change Theme
      </Button>
    </div>
  )
}
