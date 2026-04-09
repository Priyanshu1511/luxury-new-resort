import { useState } from 'react'
import { Eye, EyeOff, ArrowRight, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

type Mode = 'login' | 'register' | 'reset'

export default function Login() {
  const [mode, setMode] = useState<Mode>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    if (mode === 'login') {
      const { error: err } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      })
      if (err) setError(err.message)
      else setMessage('Welcome back! Redirecting to your portal...')
    } else if (mode === 'register') {
      const { error: err } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: { data: { full_name: form.name } },
      })
      if (err) setError(err.message)
      else setMessage('Account created! You can now sign in with your credentials.')
    } else {
      const { error: err } = await supabase.auth.resetPasswordForEmail(form.email)
      if (err) setError(err.message)
      else setMessage('Password reset instructions have been sent to your email.')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Serenova Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 to-charcoal-900/40" />
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl text-gold-400">Serenova</span>
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-white/50 mt-0.5">Luxury Resort</span>
          </Link>
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">Guest Portal</p>
            <h2 className="font-serif text-4xl text-white mb-4 leading-tight">
              Your Personal<br />Sanctuary Awaits
            </h2>
            <div className="w-12 h-px bg-gold-500 mb-6" />
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Access your reservations, request services, communicate with our concierge, and manage your stay preferences.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: '24/7', label: 'Concierge' },
                { num: '100%', label: 'Secure' },
                { num: '5★', label: 'Service' },
              ].map((s) => (
                <div key={s.label} className="border-t border-white/20 pt-3">
                  <span className="font-serif text-2xl text-gold-400 block">{s.num}</span>
                  <span className="font-body text-xs tracking-wider uppercase text-white/40">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-ivory px-6 py-20">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-10">
            <Link to="/">
              <span className="font-serif text-3xl text-gold-600">Serenova</span>
            </Link>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-400 mt-1">Luxury Resort</p>
          </div>

          {/* Glass Card */}
          <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-white/60 p-8 md:p-10">
            <div className="mb-8">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-600 mb-2">
                {mode === 'login' ? 'Welcome Back' : mode === 'register' ? 'Join Us' : 'Reset Access'}
              </p>
              <h1 className="font-serif text-3xl text-charcoal-900">
                {mode === 'login' ? 'Sign In to Portal' : mode === 'register' ? 'Create Account' : 'Forgot Password?'}
              </h1>
              <div className="w-8 h-px bg-gold-400 mt-3" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === 'register' && (
                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-charcoal-500 block mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-charcoal-200 px-4 py-3.5 font-body text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors bg-white"
                    placeholder="Your full name"
                  />
                </div>
              )}
              <div>
                <label className="font-body text-xs tracking-wider uppercase text-charcoal-500 block mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-charcoal-200 px-4 py-3.5 font-body text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>
              {mode !== 'reset' && (
                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-charcoal-500 block mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      value={form.password}
                      onChange={e => setForm({ ...form, password: e.target.value })}
                      className="w-full border border-charcoal-200 px-4 py-3.5 pr-12 font-body text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors bg-white"
                      placeholder="Minimum 6 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              )}

              {mode === 'login' && (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => { setMode('reset'); setError(''); setMessage('') }}
                    className="font-body text-xs text-gold-600 hover:underline tracking-wider"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 px-4 py-3">
                  <p className="font-body text-xs text-red-600">{error}</p>
                </div>
              )}
              {message && (
                <div className="bg-gold-50 border border-gold-200 px-4 py-3">
                  <p className="font-body text-xs text-gold-700">{message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-charcoal-900 text-white font-body text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-600 transition-all duration-300 disabled:opacity-50 mt-2"
              >
                {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : mode === 'register' ? 'Create Account' : 'Send Reset Link'}
                {!loading && (mode === 'login' ? <LogIn size={14} /> : <ArrowRight size={14} />)}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-charcoal-100">
              {mode === 'login' ? (
                <p className="font-body text-sm text-charcoal-500 text-center">
                  New guest?{' '}
                  <button
                    onClick={() => { setMode('register'); setError(''); setMessage('') }}
                    className="text-gold-600 hover:underline font-medium"
                  >
                    Create an account
                  </button>
                </p>
              ) : (
                <p className="font-body text-sm text-charcoal-500 text-center">
                  Already have an account?{' '}
                  <button
                    onClick={() => { setMode('login'); setError(''); setMessage('') }}
                    className="text-gold-600 hover:underline font-medium"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>

            <div className="mt-5 text-center">
              <p className="font-body text-xs text-charcoal-400 leading-relaxed">
                By continuing, you agree to our{' '}
                <Link to="/terms" className="text-gold-600 hover:underline">Terms</Link>
                {' '}and{' '}
                <Link to="/policies" className="text-gold-600 hover:underline">Privacy Policy</Link>
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link to="/" className="font-body text-xs tracking-wider uppercase text-charcoal-400 hover:text-gold-600 transition-colors">
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
