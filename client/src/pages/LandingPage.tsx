import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Shield, 
  Link2,
  CheckCircle,
  ArrowRight,
  Layers,
  BarChart3,
  Bell,
  Users,
  Calendar,
  FileText
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'Channel-Based Organization',
      description: 'Create dedicated channels for different groups - roommates, trips, or shared activities.'
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: 'Expense Tracking',
      description: 'Track who paid what and see real-time balances for every member in the group.'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Real-Time Insights',
      description: 'Get instant summaries of total expenses, individual contributions, and pending settlements.'
    },
    {
      icon: <Link2 className="w-5 h-5" />,
      title: 'Easy Invites',
      description: 'Invite members via email or shareable links - getting started is quick and simple.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Secure & Private',
      description: 'Your financial data is encrypted and protected with industry-standard security.'
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: 'Stay Updated',
      description: 'Get notifications for new expenses, settlements, and important group activities.'
    }
  ];

  const useCases = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Roommate Expenses',
      description: 'Track rent, utilities, groceries, and shared household costs effortlessly.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Group Trips',
      description: 'Manage travel expenses for your vacation without the hassle of splitting bills.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Events & Parties',
      description: 'Keep track of party expenses and ensure everyone contributes fairly.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Food & Dining',
      description: 'Split restaurant bills, meal prep costs, or monthly cooking expenses easily.'
    }
  ];

  const benefits = [
    'No more awkward money conversations',
    'Crystal clear expense history',
    'Automatic balance calculations',
    'Multiple currency support',
    'Mobile-friendly interface',
    'Export expenses for records'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CZ</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                ChannelZero
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm"
              >
                Sign in
              </Link>
              <Link 
                to="/register" 
                className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
            Shared expenses,
            <br />
            made simple..
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            The straightforward way to manage group expenses. Create channels, track spending, 
            and settle up-all without the awkwardness.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/register"
              className="bg-gray-900 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 text-base"
            >
              <span>Try ChannelZero</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="#features"
              className="text-gray-700 px-7 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 text-base"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-6 lg:px-8 border-y border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-semibold text-gray-900 mb-1">Free</div>
              <div className="text-gray-600 text-sm">Always and forever</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-gray-900 mb-1">Unlimited</div>
              <div className="text-gray-600 text-sm">Channels & members</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-gray-900 mb-1">Secure</div>
              <div className="text-gray-600 text-sm">End-to-end encrypted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Everything you need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with simplicity in mind, powerful enough for any group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 mb-4 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Built for any group
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From daily expenses to special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
                Transparent finances,
                <br />
                stronger relationships
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                No more spreadsheets, awkward conversations, or lost receipts. 
                ChannelZero makes group expenses crystal clear.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/register"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="space-y-4">
                  {/* Mock UI */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-semibold text-gray-900">Room Expenses</div>
                      <div className="text-sm text-gray-600">8 members</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Total spent</span>
                        <span className="font-medium text-gray-900">₹12,450</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Your balance</span>
                        <span className="font-medium text-green-600">+₹240</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Recent expense</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Groceries</div>
                        <div className="text-sm text-gray-600">Paid by Rahul</div>
                      </div>
                      <div className="font-medium text-gray-900">₹850</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Recent expense</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Electricity Bill</div>
                        <div className="text-sm text-gray-600">Paid by Priya</div>
                      </div>
                      <div className="font-medium text-gray-900">₹1,200</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join groups managing their expenses the smart way
          </p>
          <Link 
            to="/register"
            className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200"
          >
            <span>Create your first channel</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-6">
            No credit card required • Free forever • Setup in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CZ</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">ChannelZero</span>
              </div>
              <p className="text-gray-600 max-w-sm text-sm">
                The modern way to manage shared expenses. Simple, transparent, and always free.
              </p>
            </div>  
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} ChannelZero. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
