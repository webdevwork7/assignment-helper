
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/config/site';
import { Calculator, ArrowRight } from 'lucide-react';

const OrderForm = () => {
  const [assignmentType, setAssignmentType] = useState('');
  const [academicLevel, setAcademicLevel] = useState('');
  const [deadline, setDeadline] = useState('');
  const [pages, setPages] = useState(1);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    if (!assignmentType || !academicLevel || !deadline) return;

    const assignment = siteConfig.assignmentTypes.find(a => a.name === assignmentType);
    const level = siteConfig.academicLevels.find(l => l.name === academicLevel);
    const deadlineData = siteConfig.deadlines.find(d => d.name === deadline);

    if (assignment && level && deadlineData) {
      const basePrice = assignment.basePrice;
      const levelMultiplier = level.multiplier;
      const deadlineMultiplier = deadlineData.multiplier;
      const totalPrice = Math.round(basePrice * levelMultiplier * deadlineMultiplier * pages);
      setPrice(totalPrice);
    }
  };

  useState(() => {
    calculatePrice();
  }, [assignmentType, academicLevel, deadline, pages]);

  const handleChange = () => {
    setTimeout(calculatePrice, 100);
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rainbow-border p-1">
      <div className="bg-white rounded-lg p-8">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Get Instant Quote</CardTitle>
          <p className="text-gray-600">Fill the form to get real-time pricing</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="assignment-type">Assignment Type</Label>
            <Select value={assignmentType} onValueChange={(value) => { setAssignmentType(value); handleChange(); }}>
              <SelectTrigger>
                <SelectValue placeholder="Select assignment type" />
              </SelectTrigger>
              <SelectContent>
                {siteConfig.assignmentTypes.map((type) => (
                  <SelectItem key={type.name} value={type.name}>{type.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="academic-level">Academic Level</Label>
            <Select value={academicLevel} 
                   onValueChange={(value) => { setAcademicLevel(value); handleChange(); }}>
              <SelectTrigger>
                <SelectValue placeholder="Select academic level" />
              </SelectTrigger>
              <SelectContent>
                {siteConfig.academicLevels.map((level) => (
                  <SelectItem key={level.name} value={level.name}>{level.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline">Deadline</Label>
            <Select value={deadline} onValueChange={(value) => { setDeadline(value); handleChange(); }}>
              <SelectTrigger>
                <SelectValue placeholder="Select deadline" />
              </SelectTrigger>
              <SelectContent>
                {siteConfig.deadlines.map((d) => (
                  <SelectItem key={d.name} value={d.name}>{d.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pages">Number of Pages</Label>
            <Input
              type="number"
              min="1"
              value={pages}
              onChange={(e) => { setPages(parseInt(e.target.value) || 1); handleChange(); }}
              className="w-full"
            />
          </div>
          
          {price > 0 && (
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white text-center">
              <div className="text-3xl font-bold">${price}</div>
              <div className="text-sm opacity-90">Total estimated price</div>
            </div>
          )}
          
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg">
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default OrderForm;
