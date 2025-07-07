
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/config/site';
import { Calculator, ArrowRight, Phone } from 'lucide-react';

const OrderForm = () => {
  const [assignmentType, setAssignmentType] = useState('');
  const [academicLevel, setAcademicLevel] = useState('');
  const [deadline, setDeadline] = useState('');
  const [pages, setPages] = useState(1);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    if (!assignmentType || !academicLevel || !deadline || !pages) return;

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

  useEffect(() => {
    calculatePrice();
  }, [assignmentType, academicLevel, deadline, pages]);

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rainbow-border p-1 w-full max-w-sm mx-auto">
      <div className="bg-white rounded-lg">
        <CardHeader className="text-center pb-3 pt-4 px-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <CardTitle className="text-lg font-bold text-gray-900">Get Instant Quote</CardTitle>
          <p className="text-gray-600 text-xs">Fill the form to get real-time pricing</p>
        </CardHeader>
        
        <CardContent className="space-y-3 px-4 pb-4">
          <div className="space-y-1">
            <Label className="text-xs font-medium text-gray-700">Assignment Type</Label>
            <Select value={assignmentType} onValueChange={setAssignmentType}>
              <SelectTrigger className="h-8 text-sm">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {siteConfig.assignmentTypes.map((type) => (
                  <SelectItem key={type.name} value={type.name}>{type.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label className="text-xs font-medium text-gray-700">Academic Level</Label>
            <Select value={academicLevel} onValueChange={setAcademicLevel}>
              <SelectTrigger className="h-8 text-sm">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                {siteConfig.academicLevels.map((level) => (
                  <SelectItem key={level.name} value={level.name}>{level.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label className="text-xs font-medium text-gray-700">Deadline</Label>
            <Select value={deadline} onValueChange={setDeadline}>
              <SelectTrigger className="h-8 text-sm">
                <SelectValue placeholder="Select deadline" />
              </SelectTrigger>
              <SelectContent>
                {siteConfig.deadlines.map((d) => (
                  <SelectItem key={d.name} value={d.name}>{d.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label className="text-xs font-medium text-gray-700">Number of Pages</Label>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setPages(Math.max(1, pages - 1))}
                className="h-8 w-8 p-0"
              >
                -
              </Button>
              <Input
                type="number"
                min="1"
                value={pages}
                onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                className="h-8 text-center text-sm"
              />
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setPages(pages + 1)}
                className="h-8 w-8 p-0"
              >
                +
              </Button>
            </div>
          </div>
          
          {price > 0 && (
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 text-white text-center">
              <div className="text-xl font-bold">${price}</div>
              <div className="text-xs opacity-90">Total estimated price</div>
            </div>
          )}
          
          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2 text-sm font-semibold">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default OrderForm;
