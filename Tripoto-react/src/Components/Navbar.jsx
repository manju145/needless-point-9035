import React from 'react'
import {
  Box,
  Center,
  Input,
  Flex,
  Image,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';


import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import Login from './Login';


const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();


  return (
    <Box 
    // width="100%"
    position="sticky"
    top="0"
    zIndex="100"
    >

      <Flex style={{ backgroundColor: "rgb(47,155,219)" }}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
    
    
  
        >

        <Flex

          style={{ backgroundColor: "rgb(47,155,219)" }}
          flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link  href={'/'}>
            <Text

              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}> 
              <Image 
                width="140px"
                cursor="pointer"

                style={{ background: "rgb(47,155,219)", height: "30px", width: "140px" }}
                src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
              />
            </Text>
          </Link>

        </Flex>
        <Box cursor={"pointer"}  display={{ base: 'none', md: 'flex' }} >
            <Link
              display="flex"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
            
            >
             
                <Center  color={'black'}>

              <Input
           
               color="black"
                placeholder='Search here ' w={600} h={35} borderRadius={10} 
              border="0px solid black"
              backgroundColor="white"
                              />
              </Center>

              <Button  border="0px solid black"
              backgroundColor= "rgb(47,155,219)" > 
              < SearchIcon/></Button> 

                </Link>
          </Box>{" "}

        <Flex justify={{ base: 'center', md: 'start' }}  >
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}
            margin="auto"
            marginRight="10px"
          >
            <DesktopNav />
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>

            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              color={'white'}
              href={'#'} >
              Sign In
            </Button> */}
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              // bg={'pink.400'}
              href={'/signup'}
              _hover={{
                bg: 'sky',
              }}>
              <Login></Login>
            </Button>
          </Stack>
        </Flex>

        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          marginLeft="10px"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}


const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Visit Mumbai',
        href: '/mumbai',
      },
      {
        label: 'Visit Singapore',
        href: '/singapore',
      },
      {
        label: 'Mountains',
        href: '/mountains',
      },

      {
        label: 'Road Trips',
        href: '/road',
      },
    ],
  },
  {
    label: 'Forum',
    href: '/forum',

  },
  {
    label: 'Packages',
    href: '/package',
  },
  {
    label: 'Public Trips',
    children: [
      {
        label: 'Import Blog',
        href: '/import',
      },
      {
        label: 'Upload Photos',
      
      }
    ],
  },
];

export default Navbar